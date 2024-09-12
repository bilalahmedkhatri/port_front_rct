import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import { blueGrey, green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarsIcon from "@mui/icons-material/Stars";
const useStyle = makeStyles({
  root: {
    backgroundColor: blueGrey["50"],
    padding: "5px",
    display: "inline-block",
    fontWeight: "bold",
    borderRadius: "5px",
  },
});

const experience = [
  {
    designation: "FullStack Python Developer",
    workDate: "April-2022 to Continue",
    company: "UPWORK & FREELANCE",
    exp: [
      "Developed ERP apps using CSS, HTML, JavaScript, and Python, improving workflow efficiency and streamlining business processes.",
      "Created custom front-end solutions with React, Material-UI, and Bootstrap, which significantly reduced web page load times.",
      "Developed and maintained RESTful APIs using Django, Flask, and FastAPI, which significantly reduced the time it takes to build and deploy new features.",
    ],
  },
  {
    designation: "Odoo Developer",
    workDate: "Nov-2021 to April-2022",
    company: "Intelliversal Solutions, Karachi, PK",
    exp: [
      "Created reusable components, making the codebase more flexible, maintainable, and scalable.",
      "Customized and maintained existing Odoo '13 & 15' ERP modules, while developing new modules to meet evolving business needs.",
      "Developed applications and features with real-world impact, collaborating with business consultants to design ERP solutions tailored to clients' specific requirements.",
      "Handled front-end design tasks using HTML, CSS, SASS, Bootstrap, JavaScript, and XML, and developed backend functionality with Python for seamless integration",
    ],
  },
  {
    designation: "Python Teacher",
    workDate: "Nov-2019 to Nov-2021",
    company: "EMINENT ACADEMY, Karachi, PK",
    exp: [
      "- Established and maintained a welcoming and engaging classroom environment that ensured all students felt comfortable and supported in their learning journey.",
      "Developed lesson plans tailored for both beginners and advanced students, ensuring alignment with state educational standards and fostering student growth.",
      "Shared expertise in various subjects, including HTML5, CSS3, SASS, JavaScript, ReactJS, Python, Django, Git, Docker, and Linux (Ubuntu), across diverse classroom settings",
    ],
  },
  {
    designation: "Django Developer",
    workDate: "Sept-2019 to Nov-2021",
    company: "IsfainITSolution, Karachi, PK",
    exp: [
      "Developed client applications using Python Django and ReactJS, collaborating closely with UX/UI and front-end developers to ensure seamless integration and functionality.",
      "Troubleshot and tested code to resolve issues, worked in an agile team environment, and utilized PostgreSQL and SQL for relational database management.",
      "Deployed and automated Python applications into production, using cloud tools and scripts to streamline deployment processes and ensure efficient operations",
    ],
  },
  {
    designation: "Junior Web Developer",
    workDate: "Nov-2018 to Sept-2019",
    company: "CloudsCourt, Karachi, PK",
    exp: [
      "Designed websites to meet client requirements using HTML, CSS, JavaScript, ReactJS, Django, and Flask, ensuring compliance with web standards and semantic practices.",
      " Maintained existing client portfolios using frameworks like Bootstrap, ReactJS, and Material-UI, leading front-end development and assisting with back-end programming for website updates.",
      "Ensured technical feasibility and optimized design features, which enhanced site performance and user engagement through effective load-time improvements and functionality",
    ],
  },
];

export default function ResumeExp() {
  const classes = useStyle();
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Stepper
        orientation="vertical"
        sx={{
          "& .MuiStepConnector-line": { borderLeft: `2px solid ${green[500]}` },
        }}
      >
        {experience.map((step, index) => (
          <Step
            key={index}
            active={true}
            sx={{
              "& .MuiStepContent-root": {
                borderLeft: `2px solid ${green[500]}`,
              },
            }}
          >
            <StepLabel
              sx={{ "& .MuiStepIcon-root.Mui-active": { color: green[500] } }}
            >
              <Typography className={classes.root} varaint="h4">
                {step.designation}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography vaeiant="h5">{step.workDate}</Typography>
              <Typography variant="h6">{step.company}</Typography>
              {/* <Typography variant="body1" align="justify">
                {step.exp}
              </Typography> */}
              {GutterlessList(step.exp)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
// sx={{
//     width: 300,
//     color: 'success.main',
//     '& .MuiSlider-thumb': {
//       borderRadius: '1px',
//     },

function GutterlessList(value) {
  console.log(value);
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {value.map((value) => (
        <ListItem key={value} disableGutters sx={{ py: 0 }}>
          <ListItemIcon sx={{ minWidth: "1.78em" }}>
            <FiberManualRecordIcon sx={{ fontSize: 15 }} color="success" />
          </ListItemIcon>
          <ListItemText primary={value} />
        </ListItem>
      ))}
    </List>
  );
}
