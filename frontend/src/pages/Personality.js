import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

const Personality = () => {
  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4} direction="column" alignItems="center">
          {/* Knight Image */}
          <Grid item>
            <img
              src="/pictures/knightme.jpg"
              alt="Knight Representation of Alexander Fields"
              className="profile-image"
              style={{ width: "350px", height: "auto" }}
            />
          </Grid>

          {/* Personality Text Section */}
          {/* Personality Text Section */}
          <Grid item xs={12} md={8}>
            <Box className="bubble flex-start mb-2 p-3">
              {/*<Typography variant="h5" gutterBottom>
                My Personality
              </Typography>*/}
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img
                    src="/pictures/family.jpg"
                    alt="Family"
                    className="image-box"
                    style={{ width: "350px", height: "auto" }}
                  />
                </Grid>
                <br></br>
                <Grid item>
                  <Typography variant="body1" >
                    {/* Placeholder for you to fill with text later */}
                    Child of God Alexander the Engineer of Software; Master of Scrum, Bachelor
                    of Science in Computer Science & Computer Security of Georgia Southern University; 
                    Homage to House of Fields, son of Radiology
                    Technician Alonzo the adopted; Veteraned Warrior of the
                    United States Army. Thy father is a Loving Husband to
                    Engineer of Civilizatons and Breaker of Glass Ceilings Margo
                    the Maiden of House Cheatham, thyself art Second
                    to Depart thy Mother's womb, but First to Carry thy Father's
                    Name Fields.
                    <br></br>
                    <br></br>
                    If you haven't gathered already i'm a nerd/dork. I like to have fun, but if it's work mode I 
                    get pretty serious and keep everything logical. According to the personality test below
                    I'm Analytical, Considerate, and Supportive. 
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* PDF Display Section */}
          <Grid item xs={12} md={8}>
            <Box className="bubble flex-start mb-4 p-3">
              <Typography variant="h6" gutterBottom>
                My Personality in Detail (PDF)
              </Typography>
              <iframe
                src="/files/Alexander-Fields.pdf"
                width="100%"
                height="600px"
                title="Alexander Fields Personality"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Personality;