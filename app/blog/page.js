"use client"; // Add this at the top

import { useState, useEffect } from 'react';
import MediaSection from './components/MediaSection';  // Adjust import path if needed

export default function Home() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  
  // Fetch comments from localStorage on page load
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);
  
  // Save comment to localStorage
  const addComment = () => {
    if (newComment.trim() === '') return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    setNewComment('');
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Blog</h1>
      <div style={styles.postContainer}>
        <h2>Blog Post Title</h2>
        <p>This is a sample blog post content.</p>
        <MediaSection />
      </div>

      <div style={styles.commentSection}>
        <h3>Comments</h3>
        <div style={styles.commentBox}>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <p key={index} style={styles.comment}>{comment}</p>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>

        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment"
          style={styles.commentInput}
        />
        <button onClick={addComment} style={styles.addButton}>Add Comment</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  postContainer: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  commentSection: {
    backgroundColor: '#e0e0e0',
    padding: '15px',
    borderRadius: '8px',
  },
  commentBox: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    minHeight: '100px',
    marginBottom: '10px',
  },
  comment: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '5px',
  },
  commentInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

