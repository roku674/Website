import React from "react";
import { Container, Typography, Box, Link, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4} direction="column" alignItems="center">
          {/* Main profile image */}
          <Grid item>
            <img
              src="/pictures/profile.jpg"
              alt="Alexander Fields"
              className="profile-image"
            />
          </Grid>

          {/* Header and personal introduction */}
          <Grid item>
            <Typography variant="h4" gutterBottom className="center-text">
              Welcome to My Website
            </Typography>
          </Grid>

          {/* Personal Description with images */}
          {/* Georgia Southern University Image and Text */}
          <Grid item xs={12} md={8}>
            <Box className="bubble flex-start mb-2 p-3">
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img
                    src="/pictures/gsu.png"
                    alt="Georgia Southern University"
                    className="image-box"
                    style={{ width: "350px", height: "auto" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1" className="text-light-blue">
                    Hi, I'm Alexander Fields, a software engineer with a passion
                    for backend development but also skilled in full-stack
                    engineering. I graduated from Georgia Southern University
                    with a Bachelor's of Science in Computer Science. I'm always
                    looking for side <a href="/projects"> projects </a> to work
                    on outside of my main role.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Jedi Image and Text */}
          <Grid item xs={12} md={8}>
            <Box className="bubble flex-start mb-2 p-3">
              <Grid container alignItems="center">
                <Grid item xs={2} md={1} className="mr-2">
                  <img
                    src="/pictures/jedime.jpg"
                    alt="Me as a Jedi"
                    className="image-box"
                  />
                </Grid>
                <Grid item xs={10} md={11}>
                  <Typography variant="body1" className="text-light-blue">
                    I enjoy playing video games such as League of Legends and
                    World of Warcraft. I also love watching historical fiction,
                    fantasy, and science fiction TV & movies. My favorite foods
                    are Korean BBQ and Fried Okra, and my favorite color is
                    Cyan. I'm a mallet percussionist. Most importantly I am a
                    follower of the teachings of Christ. That being said I
                    prefer to spend Sundays volunteering to adequetely live out
                    the word of Christ and if not donate in my absence.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Vibraphone Image and Text */}
          <Grid item xs={12} md={8}>
            <Box className="bubble flex-start mb-4 p-3">
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img
                    src="/pictures/vibe.png"
                    alt="Vibraphone"
                    className="vibe-image"
                    style={{ width: "150px", height: "auto" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1" className="text-light-blue">
                    My computer is doo doo even though I'm a developer lol. To
                    be fair if it can't run on a bad computer then its probably
                    not good code! I'm on an Intel(R) Core(TM) i7-6700 CPU @
                    3.40GHz, 3401 Mhz, 4 Core(s), 8 Logical Processor(s), 16
                    Gigs of ram NVIDIA GeForce GTX 960 for my GPU. I'm currently
                    saving up for an all-new machine, but it's over 2k and will
                    be water-cooled :D. Check out the build I want to make{" "}
                    <Link
                      href="https://www.microcenter.com/site/content/custom-pc-builder.aspx?load=67c25be5-4a3a-40c1-bcde-083be28d9fd0"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fde047" }}
                    >
                      here
                    </Link>
                    .
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Footer with donation link styled like other bubbles */}
          <Grid item xs={12} md={8}>
            <Box
              className="bubble flex-start mb-4 p-3"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {/* Donation text with larger font */}
              <Typography variant="h6" className="center-text">
                If you'd like to donate to the charity I contribute to, visit
              </Typography>

              {/* Centered logo below the text */}
              <Box mt={2}>
                <Link
                  href="https://www.berich.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/pictures/berich-2019-website-logo.png"
                    alt="Be Rich Charity"
                    className="charity-logo"
                    style={{ width: "350px", height: "auto" }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Donation Links */}
          <Grid item xs={12} md={8}>
            <Box className="bubble">
              <Typography variant="h6" gutterBottom className="center-text">
                Support Me{" "}
                <span style={{ fontSize: "0.6em" }}>
                  (Support the needy before me though)
                </span>
              </Typography>
              <Box className="support-icons">
                <Link
                  href="https://www.paypal.com/paypalme/adastrapericlum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="pictures/paypal-icon.png" alt="PayPal" />
                  <span style={{ fontSize: "0.6em" }}></span>
                </Link>
                <Link
                  href="https://cash.app/$AnimalDander"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/pictures/cashapp-icon.png" alt="CashApp" />
                  <span style={{ fontSize: "0.6em" }}></span>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact information */}
          <Grid item xs={12} md={8}>
            <Box className="bubble">
              <Typography variant="h6" gutterBottom className="center-text">
                Contact Me
              </Typography>
              <Box className="contact-icons">
                <Link
                  href="https://github.com/roku674"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                    alt="GitHub"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alexander-a-fields/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                    alt="LinkedIn"
                  />
                </Link>
                <Link
                  href="https://discord.com/users/animaldander"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/discord.svg"
                    alt="Discord"
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
