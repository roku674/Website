import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import '../index.css'; // Import your CSS file

const Home = () => {
  return (
    <Container>
      <Box mt={4} className="flex-container">
        {/* Main profile image */}
        <Box mb={4}>
          <img
            src="/pictures/profile.jpg"
            alt="Alexander Fields"
            className="profile-image"
          />
        </Box>

        {/* Header and personal introduction */}
        <Typography variant="h4" gutterBottom className="center-text">Welcome to My Website</Typography>

        {/* Personal Description with images */}
        <Box className="bubble flex-start mb-2 p-3" width="100%">
          {/* Georgia Southern University Image and Text */}
          <Box className="flex-start">
            <Box className="mr-2">
              <img src="/pictures/gsu.png" alt="Georgia Southern University" className="image-box" />
            </Box>
            <Typography variant="body1" className="text-light-blue">
              Hi, I'm Alexander Fields, a software engineer with a passion for backend development but also skilled in full-stack engineering. I graduated from Georgia Southern University. I'm always looking for side projects to work on outside of my main role.
            </Typography>
          </Box>
        </Box>

        {/* Jedi Image and Text */}
        <Box className="bubble flex-start mb-2 p-3">
          <Box className="mr-2">
            <img src="/pictures/jedime.jpg" alt="Me as a Jedi" className="image-box" />
          </Box>
          <Typography variant="body1" className="text-light-blue">
            I enjoy playing video games such as League of Legends and World of Warcraft. I also love watching historical fiction, fantasy, and science fiction TV & movies. My favorite foods are Korean BBQ and Fried Okra, and my favorite color is Cyan. I'm a mallet percussionist. Most importantly I am a follower of the teachings of Christ.
          </Typography>
        </Box>

        {/* Vibraphone Image and Text */}
        <Box className="bubble flex-start mb-4 p-3">
          <Box className="mr-2">
            <img src="/pictures/vibe.png" alt="Vibraphone" className="vibe-image" />
          </Box>
          <Typography variant="body1" className="text-light-blue">
            My computer is doo doo even though I'm a developer lol. I'm on an Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz, 3401 Mhz, 4 Core(s), 8 Logical Processor(s), NVIDIA GeForce GTX 960 for my GPU. I'm currently saving up for an all-new machine, but it's over 2k and will be water-cooled :D. Check out the build I want to make <Link href="https://www.microcenter.com/site/content/custom-pc-builder.aspx?load=67c25be5-4a3a-40c1-bcde-083be28d9fd0" target="_blank" rel="noopener noreferrer" className="link">
              here
            </Link>.
          </Typography>
        </Box>

        {/* Donation Links */}
        <Box className="bubble">
          <Typography variant="h6" gutterBottom className="center-text">Support Me</Typography>
          <Box className="support-icons">
            <Link href="https://www.paypal.com/paypalme/adastrapericlum" target="_blank" rel="noopener noreferrer">
              <img src="pictures/paypal-icon.png" alt="PayPal" />
            </Link>
            <Link href="https://cash.app/$AnimalDander" target="_blank" rel="noopener noreferrer">
              <img src="/pictures/cashapp-icon.png" alt="CashApp" />
            </Link>
          </Box>
        </Box>

        {/* Contact information */}
        <Box className="bubble">
          <Typography variant="h6" gutterBottom className="center-text">Contact Me</Typography>
          <Box className="contact-icons">
            <Link href="https://github.com/roku674" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" />
            </Link>
            <Link href="https://www.linkedin.com/in/alexander-a-fields/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="LinkedIn" />
            </Link>
            <Link href="https://discord.com/users/animaldander" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/discord.svg" alt="Discord" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;