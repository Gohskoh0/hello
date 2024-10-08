"use client";  // Ensure the component is client-side

import { useState, useEffect } from 'react';

export default function MediaSection() {
  const [media, setMedia] = useState(null);
  const [role, setRole] = useState('');

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    // Code accessing 'window' must be inside useEffect
    const checkRole = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const roleParam = urlParams.get('role');
      setRole(roleParam || '');
    };

    checkRole();
  }, []); // Empty dependency array ensures this only runs on the client

  return (
    <div style={styles.mediaSection}>
      {role === 'marketing' ? (
        <>
          <input type="file" onChange={handleMediaUpload} />
          {media && <img src={media} alt="Uploaded media" style={styles.mediaPreview} />}
        </>
      ) : (
        <p>Only marketing team can post media content.</p>
      )}
    </div>
  );
}

const styles = {
  mediaSection: {
    marginTop: '20px',
  },
  mediaPreview: {
    marginTop: '10px',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};
