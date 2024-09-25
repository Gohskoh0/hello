"use client";

import { useState } from 'react';

export default function BlogPage() {
  const [newPost, setNewPost] = useState('');
  const [newMedia, setNewMedia] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handlePostSubmit = async () => {
    if (!newPost && !newMedia) return;

    const formData = new FormData();
    formData.append('postContent', newPost);
    if (newMedia) {
      formData.append('media', newMedia);
    }

    try {
      const response = await fetch('/api/savePost', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setResponseMessage('Post and media saved successfully!');
        setNewPost('');
        setNewMedia(null);
      } else {
        setResponseMessage('Error saving post.');
      }
    } catch (error) {
      setResponseMessage('Error saving post.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Community Blog</h1>

      <div style={styles.newPostSection}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your article..."
          style={styles.textarea}
        />
        <input
          type="file"
          onChange={(e) => setNewMedia(e.target.files[0])}
          accept="image/*"
          style={styles.fileInput}
        />
        <button onClick={handlePostSubmit} style={styles.postButton}>
          Post Article
        </button>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  newPostSection: {
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    height: '500px',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  fileInput: {
    display: 'block',
    margin: '10px auto',
  },
  postButton: {
    padding: '10px 15px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
