import { Box, Typography, Stepper, Step, StepLabel, StepContent } from "@mui/material"
import { blueGrey, green } from '@mui/material/colors';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    root: {
        backgroundColor: blueGrey['50'],
        padding: '5px',
        display: 'inline-block',
        fontWeight: 'bold',
        borderRadius: '5px',
    },
})

const experience = [
    { designation: 'FullStack Python Developer', workDate: "April-2022 to Continue", company: 'UPWORK & FREELANCE', exp: "Built designed and maintained a website for the infinity using CSS, XHTML, XML, Javascript, Python. Built custom websites using React, Material-UI, Bootstrap, axiosjs, asyncio, Django and Flask, including custom plug-ins and filters. Handling all verbal and written communications between hosting companies, clients, and vendors. Created reusable components with pep principles to code to allow for lesson flexibility and expandability." },
    { designation: 'Odoo Developer', workDate: "Nov-2021 to April-2022", company: 'Intelliversal Solutions, Karachi, PK', exp: "Built designed and maintained a website for the infinity using CSS, XHTML, XML, Javascript, Python. Built custom websites using React, Material-UI, Bootstrap, axiosjs, asyncio, Django and Flask, including custom plug-ins and filters. Handling all verbal and written communications between hosting companies, clients, and vendors. Created reusable components with pep principles to code to allow for lesson flexiCustomize and maintain existing modules of the Odoo ERP and develop new Modules. Developing applications/features that affect everyday life. Working with Business Consultant to design and develop ERP as per clients requirements. working on design tasks like HTML, CSS, SASS, Bootstrap, JavaScript, & XML. For Backend Functionallity PYTHON.bility and expandability." },
    { designation: 'Python Teacher', workDate: "Nov-2019 to Nov-2021", company: 'EMINENT ACADEMY, Karachi, PK', exp: "Created and maintained a welcoming, friendly, engaging, and clean classroom environment where all students felt comfortable. Developed lesson plans for Beginners and Experts level students that complied with state of standards. Share experience in a variety of classrooms, including HTML5, CSS3, SASS, JAVASCRIPT, REACTJS, PYTHON, DJANGO, Git, Docker, Linux (Ubuntu). Monthly schedule to meet parents for give them monthly progress to their children." },
    { designation: 'Django Developer', workDate: "Sept-2019 to Nov-2021", company: "IsfainITSolution, Karachi, PK", exp: "My job is to program applications for clients using the Python Django framework with ReactJS. Working closely with UX / UI, and Front-end Developers. Troubleshoot problems, and test existing code. Worked in an agile environment with team of engineers. Database skills in a relational database (PostgresSQL, and SQL). Deployed Python applications into production with cloud engineers." },
    { designation: 'Junior Web Developer', workDate: "Nov-2018 to Sept-2019", company: "CloudsCourt, Karachi, PK", exp: "Design website as per client requirements. Creation of standards compliants, semantic, web interfaces via HTML, CSS, JAVASCRIPT, REACTJS, and DJANGO, FLASK. Ability to write standards basic semantically correct code of these languages. Mantainence of existing client portfolio within their respective frameworks (Bootstrap, ReactJS, & Material-UI). Led front-end development and assisted with back-end programming for website overhaul. Ensured the technical feasibility and optimum functioning of design features that accelerated load-time by 17%and improved site stickiness by 21%." },
]


export default function ResumeExp() {
    const classes = useStyle()
    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Stepper orientation="vertical" sx={{ '& .MuiStepConnector-line': { borderLeft: `2px solid ${green[500]}`} }} >
                {experience.map((step, index) => (
                    <Step active={4} sx={{ '& .MuiStepContent-root': { borderLeft: `2px solid ${green[500]}`} }}>
                        <StepLabel sx={{ '& .MuiStepIcon-root.Mui-active': { color: green[500],  } }}>
                            <Typography className={classes.root} varaint='h4'>{step.designation}</Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography vaeiant='h5'>{step.workDate}</Typography>
                            <Typography variant='h6'>{step.company}</Typography>
                            <Typography variant='body1' align='justify'>
                                {step.exp}
                            </Typography>
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
