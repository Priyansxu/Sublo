import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [subtitle, setSubtitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setSubtitle(data.subtitle);
    } catch (err) {
      console.error('Error:', err);
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
    </div>
  );
}