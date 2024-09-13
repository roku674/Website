import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import '../index.css'; // Import your CSS file

const Experience = () => {
  return (
    <Container>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        {/* Add your image here using the public path */}
        <Box mb={4}>
          <img src="/pictures/suitme.jpg" alt="Alexander Fields" className="profile-image" />
        </Box>

        {/* Professional Experience Header */}
        <Typography variant="h4" align="center" className="center-text" gutterBottom>
          Professional Experience
        </Typography>
        
        {/* Job Timeline Graph */}
        <Box mb={4} className="bubble">
          <Typography variant="h4" align="center" gutterBottom>
            Job Timeline
          </Typography>
          <img src="/pictures/experience.png" alt="Job Timeline Graph" className="timeline-image" />
        </Box>
        
        {/* Experience at Optimized Payments */}
        <Box className="bubble">
          <Typography variant="h5" align="center" gutterBottom>
            Full Stack Engineer | <a href="https://optimizedpayments.com" target="_blank" rel="noopener noreferrer" className="experience-link">Optimized Payments</a>
          </Typography>
          <Typography variant="body1" paragraph>
            November 2022 - Present
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Developed RESTful APIs to facilitate seamless integration and data exchange between systems." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Coded in C#/.NET, Java, and Node/React.js to develop robust applications." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developed and optimized ETL processes, ensuring client files are ingested, transformed, and stored within the database." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Created serverless applications in Azure, leveraging cloud technologies for scalable and efficient solutions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Upgraded multiple systems to enhance performance and reliability within the startup environment." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Utilized Python for data analytics, providing insights and actionable data for business strategies." />
            </ListItem>
          </List>
        </Box>

        {/* Experience at MagMutual */}
        <Box className="bubble">
          <Typography variant="h5" align="center" gutterBottom>
            API Engineer | <a href="https://magmutual.com" target="_blank" rel="noopener noreferrer" className="experience-link">MagMutual</a>
          </Typography>
          <Typography variant="body1" paragraph>
            March 2021 – November 2022
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Led the API team, handling backend API integrations and automating server maintenance." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Completed full-stack projects using C#.NET, ASP.NET, and Visual Basic." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Managed the billing API and database, leveraging automation tools like Jenkins and Spinnaker for testing and deployment." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Refactored old Visual Basic website into Node.js/Java backend and Gatsby/Drupal js front end." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Organized workflow via Agile methodologies under the management of a Scrum Master." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Worked with SQL and Oracle databases to ensure data integrity and security." />
            </ListItem>
          </List>
        </Box>

        {/* Graduation Project at Georgia Southern University */}
        <Box className="bubble">
          <Typography variant="h5" align="center" gutterBottom>
            Graduation Project | <a href="https://www.georgiasouthern.edu/" target="_blank" rel="noopener noreferrer" className="experience-link">Georgia Southern University</a>
          </Typography>
          <Typography variant="body1" paragraph>
            SOSA (Subjective Objective Stimulus Assessment)
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Collaborated with Dr. Webster of the Psychology Department to deliver a platform for psychologists to create and administer visual experiments." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developed a web-based version of the SOSA platform, capable of running on any computer with a web browser." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Implemented backend code in Python and front-end code in JavaScript, HTML, and CSS, using REST architecture." />
            </ListItem>
          </List>
        </Box>

        {/* Personal Project at Perilous Games */}
        <Box className="bubble">
          <Typography variant="h5" align="center" gutterBottom>
           Personal Project | <a href="https://perilousgames.com" target="_blank" rel="noopener noreferrer" className="experience-link">Perilous Games</a> 
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Developed a free-to-play Massive Multiplayer Online Role-Playing game called Ad Astra Imperium." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Formed a corporation, Perilous Games, Ltd., to hold the copyrights for the game." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Utilized Unity, Blender, and AutoCAD for design, with code stored in GitHub." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developed code using C#, C++ and SQL, hosted on an Amazon EC2 instance." />
            </ListItem>
          </List>
        </Box>

        {/* Internship Experience at Arcadis U.S. */}
        <Box className="bubble">
          <Typography variant="h5" align="center" gutterBottom>
            Intern | <a href="https://www.arcadis.com/en-us" target="_blank" rel="noopener noreferrer" className="experience-link">Arcadis U.S., Smyrna, GA</a>
          </Typography>
          <Typography variant="body1" paragraph>
            May – August 2014 & 2015
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Worked on various projects in roadway, bridge design, traffic design, and fieldwork." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Coded and tested traffic plans in C++/DOS for traffic signal timing engineers in the traffic lab." />
            </ListItem>
          </List>
        </Box>

        {/* Internship Experience at A&R Engineering */}
        <Box className="bubble">
          <Typography variant="h5" align="center" gutterBottom>
            Intern | <a href="https://areng.com/" target="_blank" rel="noopener noreferrer" className="experience-link">A&R Engineering</a>
          </Typography>
          <Typography variant="body1" paragraph>
            May – August 2016 & 2017
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Designed and edited signal plans, grading and erosion plans, and master plans using AutoCad." />
            </ListItem>
          </List>
        </Box>

        {/* Education Section */}
        <Box className="bubble">
          <Typography variant="h4" align="center" gutterBottom>Education</Typography>
          <Typography variant="h5" align="center" gutterBottom>
            B.S. Computer Science | <a href="https://www.georgiasouthern.edu/" target="_blank" rel="noopener noreferrer" className="experience-link">Georgia Southern University</a>
          </Typography>
          <Typography variant="body1" paragraph>
            May 2020
          </Typography>
        </Box>

        {/* Technical Skills Section */}
        <Box className="bubble">
          <Typography variant="h4" align="center" gutterBottom>Technical Skills</Typography>
          <Typography variant="body1" paragraph>
            <a href="https://drive.google.com/drive/folders/1bhHUa6VtaJY_iB_qCT3QM8G_A9AxCDWt?usp=sharing" target="_blank" rel="noopener noreferrer" className="experience-link">All Certifications</a><br />
            Scrum Master Certified, C# / VB / ASP.NET, .Net Core, React / Node.js, Python, SQL, Oracle SQL Developer, Java, C++, HTML, CSS, JavaScript, Unity, GitHub, Jira, Azure, AWS, Jenkins, Spinnaker, and more.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Experience;
