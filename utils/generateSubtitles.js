import { transcribeAudio } from './deepgram';

export async function generateSubtitles(videoFile) {
  try {
    const subtitles = await transcribeAudio(videoFile);
    return subtitles;
  } catch (error) {
    console.error('Error generating subtitles:', error);
    return [];
  }
}