import Deepgram from '@deepgram/sdk';

const deepgramApiKey = process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY;
const deepgram = new Deepgram(deepgramApiKey);

export async function transcribeAudio(file) {
  try {
    const response = await deepgram.transcription.preRecorded({
      buffer: file,
      mimetype: 'video/mp4'
    }, {
      punctuate: true,
      utterances: true
    });

    const subtitles = response.results.utterances.map((utterance) => ({
      startTime: utterance.start,
      endTime: utterance.end,
      text: utterance.transcript,
    }));

    return subtitles;
  } catch (error) {
    console.error('Error transcribing audio:', error);
    return [];
  }
}