import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const botsData = [
  {
    id: 1,
    name: "Automated Trader",
    description: (
      <>
        Trades stocks on{" "}
        <Link
          href="https://alpaca.markets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alpaca.Markets
        </Link>
      </>
    ),
    link: "/bots/trading",
  },
  {
    id: 2,
    name: "Discord Bot",
    description: (
      <>
        Bot that helps my guild manage planets, be alerted to events, and more.
      </>
    ),
    link: "https://github.com/roku674/DiscordBotUpdates",
  },
  {
    id: 3,
    name: "Alexander 1",
    description: "Me I'm actually an AI in disguise :D.",
    link: "/bots/alexander",
  },
  // Add more bots as needed
];

const BotsPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
		Bots Page
	  </Typography>
      <Grid container spacing={4}>
        {botsData.map((bot) => (
          <Grid item xs={12} sm={6} md={4} key={bot.id}>
            <Card
              className="rounded-card" // Use CSS class for rounded styling
              sx={{
                borderRadius: "20px", // Increase the border-radius for more rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for depth
                overflow: "hidden", // Prevent child overflow from affecting rounded corners
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {bot.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bot.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={bot.link}
                  className="w3-btn"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BotsPage;
