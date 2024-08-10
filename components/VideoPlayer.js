import { useState, useEffect, useRef } from 'react';
import { Upload, Play } from 'lucide-react';
import { generateSubtitles } from '../generateSubtitles';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';

export default function VideoPlayer() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderColor, setBorderColor] = useState('#000000');
  const [textSize, setTextSize] = useState(24);
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);

      // Generate subtitles using Deepgram
      const generatedSubtitles = await generateSubtitles(file);
      setSubtitles(generatedSubtitles);
    }
  };

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext('2d');

    const renderSubtitles = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      ctx.font = `${textSize}px Arial`;
      ctx.fillStyle = textColor;
      ctx.strokeStyle = borderColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      const x = canvasElement.width / 2;
      const y = canvasElement.height - 40; // 40px above the bottom edge

      if (currentSubtitle) {
        ctx.fillText(currentSubtitle, x, y);
        ctx.strokeText(currentSubtitle, x, y);
      }
    };

    const syncSubtitlesWithVideo = () => {
      const currentTime = videoElement.currentTime;
      const subtitle = subtitles.find((sub) => currentTime >= sub.startTime && currentTime <= sub.endTime);
      if (subtitle) {
        setCurrentSubtitle(subtitle.text);
      } else {
        setCurrentSubtitle('');
      }
    };

    videoElement.addEventListener('timeupdate', syncSubtitlesWithVideo);
    const intervalId = setInterval(renderSubtitles, 100);

    return () => {
      videoElement.removeEventListener('timeupdate', syncSubtitlesWithVideo);
      clearInterval(intervalId);
    };
  }, [textColor, borderColor, textSize, subtitles, currentSubtitle]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Video Subtitle Generator</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          {!videoSrc ? (
            <label htmlFor="video-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">MP4, WebM or OGG (MAX. 800x400px)</p>
              </div>
              <input id="video-upload" type="file" className="hidden" onChange={handleFileChange} accept="video/*" />
            </label>
          ) : (
            <div className="relative">
              <video ref={videoRef} src={videoSrc} controls className="w-full rounded-lg"></video>
              <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6">Subtitle Options</h2>
          <div className="space-y-6">
            <ColorSelector label="Text Color" value={textColor} onChange={setTextColor} />
            <ColorSelector label="Border Color" value={borderColor} onChange={setBorderColor} />
            <SizeSelector label="Text Size" value={textSize} onChange={setTextSize} />
          </div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center text-lg">
          <Play className="mr-2" />
          Generate Subtitles
        </button>
      </div>
    </div>
  );
}