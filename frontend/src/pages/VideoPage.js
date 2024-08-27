import React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { videoSrc, title } = useParams(); // Get parameters from URL

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {decodeURIComponent(title)} {/* Decode URL-encoded title */}
      </Typography>
      <video width="100%" height="auto" controls>
        <source src={`/${videoSrc}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
};

export default VideoPage;
