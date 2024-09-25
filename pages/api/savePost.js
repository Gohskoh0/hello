import fs from 'fs';
import path from 'path';
import formidable from 'formidable'; // For parsing form data

export const config = {
  api: {
    bodyParser: false, // We need to disable the default body parser to handle file uploads
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    const uploadDir = path.join(process.cwd(), 'uploads'); // Directory to store posts and media

    // Ensure the upload directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    form.uploadDir = uploadDir; // Set directory to store media files
    form.keepExtensions = true; // Keep file extensions

    // Parse form data (post content and media)
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing the form' });
      }

      // Save post content to a file
      const postContent = fields.postContent;
      const postFilePath = path.join(uploadDir, `post_${Date.now()}.txt`);
      fs.writeFileSync(postFilePath, postContent);

      // If there's an uploaded media file, move it to the upload directory
      if (files.media) {
        const mediaFilePath = path.join(uploadDir, files.media.newFilename);
        fs.renameSync(files.media.filepath, mediaFilePath);
      }

      res.status(200).json({ message: 'Post and media saved successfully!' });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
