// src/tools/Tools.js
import React from "react";
import { Container, Typography, List, ListItem, Link } from "@mui/material";
import '../index.css';  // Import your existing CSS

const Tools = () => {
  return (
    <Container>
      <Typography variant="h4" className="center-text" gutterBottom>
        Tools
      </Typography>
      <Typography variant="body1" className="center-text" paragraph>
        Here are some tools that I have created:
      </Typography>
      <List className="w3-ul">
        <ListItem className="w3-ul li">
          <Link href="/tools/visualizer" className="text-light-blue" underline="hover">
            JSON Visualizer (Under Construction)
          </Link>
        </ListItem>
        <ListItem className="w3-ul li">
          <Link href="/tools/transformer" className="text-light-blue" underline="hover">
            Object Transformer (Under Construction)
          </Link>
        </ListItem>
        <ListItem className="w3-ul li">
          <Link
            href="https://github.com/roku674/gantt-creator/blob/main/job_timeline.py"
            className="text-light-blue"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gantt Chart Creator
          </Link>
        </ListItem>
        <ListItem>
          <Typography variant="body2" className="center-text">More tools coming as I get bored...</Typography>
        </ListItem>
      </List>
    </Container>
  );
};

export default Tools;
