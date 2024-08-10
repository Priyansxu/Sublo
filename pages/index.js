import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [subtitle, setSubtitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSubtitle(''); // Clear previous subtitle
    setError(''); // Clear previous error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a video file.');
      return;
    }

    setLoading(true);
    setError('');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to generate subtitle. Please try again.');
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setSubtitle(data.subtitle);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Video Subtitle Generator</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="video/mp4" />
        <button type="submit">Upload Video</button>
      </form>
      {loading && <p>Generating subtitle...</p>}
      {subtitle && <p>Subtitle: {subtitle}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}