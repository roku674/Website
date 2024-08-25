// src/pages/Home.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        {/* Main profile image */}
        <Box mb={4}>
          <img src="/pictures/profile.jpg" alt="Alexander Fields" style={{ width: '150px', borderRadius: '50%' }} />
        </Box>

        {/* Header and personal introduction */}
        <Typography variant="h4" gutterBottom>Welcome to My Website</Typography>

        {/* Personal Description with images */}
        <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%">
          
          {/* Georgia Southern University Image and Text */}
          <Box display="flex" alignItems="flex-start" mb={2}>
            <Box mr={2}>
              <img src="/pictures/gsu.png" alt="Georgia Southern University" style={{ width: '80px', borderRadius: '8px' }} />
            </Box>
            <Typography variant="body1">
              Hi, I'm Alexander Fields, a software engineer with a passion for backend development but also skilled in full-stack engineering. I graduated from Georgia Southern University. I'm always looking for side projects to work on outside of my main role.
            </Typography>
          </Box>

          {/* Jedi Image and Text */}
          <Box display="flex" alignItems="flex-start" mb={2}>
            <Box mr={2}>
              <img src="/pictures/jedime.jpg" alt="Me as a Jedi" style={{ width: '80px', borderRadius: '8px' }} />
            </Box>
            <Typography variant="body1">
              I enjoy playing video games such as League of Legends and World of Warcraft. I also love watching historical fiction, fantasy, and science fiction TV & movies. My favorite foods are Korean BBQ and Fried Okra, and my favorite color is Cyan. I'm a mallet percussionist and am a follower of the teachings of Christ.
            </Typography>
          </Box>

          {/* Vibraphone Image and Text */}
          <Box display="flex" alignItems="flex-start" mb={4}>
            <Box mr={2}>
              <img src="/pictures/vibe.png" alt="Vibraphone" style={{ width: '100px', borderRadius: '8px' }} />
            </Box>
            <Typography variant="body1">
              My computer is doo doo even though I'm a developer lol. I'm on an Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz, 3401 Mhz, 4 Core(s), 8 Logical Processor(s),	NVIDIA GeForce GTX 96 for my GPU. I'm currently saving up for an all-new machine, but it's over 2k and will be water-cooled :D. Check out the build I want to make <Link href="https://www.microcenter.com/site/content/custom-pc-builder.aspx?load=67c25be5-4a3a-40c1-bcde-083be28d9fd0" target="_blank" rel="noopener noreferrer">here</Link>.
            </Typography>
          </Box>
        </Box>

        {/* Donation Links */}
        <Typography variant="h6" gutterBottom>Support Me</Typography>
        <Box mb={4} display="flex" justifyContent="center" alignItems="center">
          <Link href="https://www.paypal.com/paypalme/adastrapericlum" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
            <img src="pictures/paypal-icon.png" alt="PayPal" style={{ width: '40px' }} />
          </Link>
          <Link href="https://cash.app/$AnimalDander" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
            <img src="/pictures/cashapp-icon.png" alt="CashApp" style={{ width: '40px' }} />
          </Link>
        </Box>

        {/* Contact information */}
        <Typography variant="h6" gutterBottom>Contact Me</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <Link href="https://github.com/roku674" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" style={{ width: '40px' }} />
          </Link>
          <Link href="https://www.linkedin.com/in/alexander-a-fields/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="LinkedIn" style={{ width: '40px' }} />
          </Link>
          <Link href="https://discord.com/users/animaldander" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/discord.svg" alt="Discord" style={{ width: '40px' }} />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
