import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Projects = () => {
  return (
    <Container>
      <Box 
        mt={4} 
        className="bubble"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >        {/* Apply the bubble class here */}
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <List>
          {/* Kingdom Of God Project 
          <ListItem>
            <ListItemText
              primary={
                <>
                  Kingdom Of God - A website to connect people worldwide in a
                  social media platform centered around philosophy and strong
                  community.{" "}
                  <a
                    href="https://www.kingdomofgod.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fde047" }}
                  >
                    Visit Website
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/kingdomofgod-online/kog-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fde047" }}
                  >
                    GitHub Repository
                  </a>
                </>
              }
            />
          </ListItem>
          */}
          {/* Ad Astra Imperium Project */}
          <ListItem>
            <ListItemText
              primary={
                <>
                  Ad Astra Imperium - Video Game currently in progress.{" "}
                  <a
                    href="https://www.perilousgames.com/dashboard/games"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fde047" }}
                  >
                    Download Ad Astra
                  </a>{" "}
                  |{" "}
                  <a
                    href="/videos/ad-astra-video.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fde047" }}
                  >
                    Watch Ad Astra Imperium Video
                  </a>
                </>
              }
            />
          </ListItem>

          {/* Automated Stock Trading Bot Project */}
          <ListItem>
            <ListItemText
              primary={
                <>
                  <Link
                    href="/bots"
                    underline="none"
                    style={{ color: "#fde047" }}
                  >
                    Automated Stock Trading Bot
                  </Link>
                  {" - Currently working on this project."}
                </>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary={
                <>
                    If you have a project in mind and would like to enlist my help do not hesitate to reach out!
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Projects;
