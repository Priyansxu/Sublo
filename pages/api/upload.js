import { IncomingForm } from 'formidable';
import { Deepgram } from '@deepgram/sdk';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const form = new IncomingForm();
  form.uploadDir = './uploads';
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to parse form data' });
    }

    const file = files.file[0];
    const filePath = file.filepath;

    try {
      const audioSource = {
        buffer: fs.readFileSync(filePath),
        mimetype: 'video/mp4',
      };

      // Send the video to Deepgram for transcription
      const response = await deepgram.transcription.preRecorded(audioSource, {
        punctuate: true, // Adds punctuation to the transcript
        utterances: true, // Breaks the transcript into segments by speaker or silence
      });

      const transcript = response.results.channels[0].alternatives[0].transcript;

      res.status(200).json({ subtitle: transcript });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate subtitle' });
    } finally {
      // Clean up uploaded files
      fs.unlinkSync(filePath);
    }
  });
};