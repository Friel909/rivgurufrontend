import React from 'react';
import Link from '@/utils/ActiveLink'
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Lets Get Started', 'Contact Information', 'Password'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
      <div className="container">
        <Head>
          <title>Rivguru - Your Career Partner</title>
        </Head>
        <div className="section-title">
            <h2>Let's Get Started</h2>
        </div>

        <div className="row">
          <div className=" col-lg-6 col-md-12">
            <h4 className="mb-3"> Enter Your Contact Information</h4>
            <TextField id="outlined-basic"  fullWidth label="Name" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Email" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Phone" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="City/Country" variant="outlined" className="mb-3"/>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-image text-center">
              <img src="/images/about-img10.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    );
    case 1:
      return (
      <div className="container">
        <div className="section-title">
            <h2>Contact Informations</h2>
        </div>

        <div className="row">
          <div className=" col-lg-6 col-md-12">
            <h4 className="mb-3"> Please Fill in The Details</h4>
            <TextField id="outlined-basic"  fullWidth label="Highest Education" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Name of University" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Major Subject" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Total Years of Experience" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Current Company" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Area of Interest" variant="outlined" className="mb-3"/>
            <TextField id="outlined-basic"  fullWidth label="Dream Job" variant="outlined" className="mb-3"/>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-image text-center">
              <img src="/images/about-img10.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
      );
    case 2:
      return (
        <div className="container">
          <div className="section-title">
              <h2>Password</h2>
          </div>
  
          <div className="row">
            <div className=" col-lg-6 col-md-12">
              <h4 className="mb-3"> One Last Step </h4>
              <TextField id="outlined-basic"  fullWidth label="Password" type="password" variant="outlined" className="mb-3"/>
              <TextField id="outlined-basic"  fullWidth label="Confirm Password" type="password" variant="outlined" className="mb-3"/>
            </div>
  
            <div className="col-lg-6 col-md-12">
              <div className="about-image text-center">
                <img src="/images/about-img10.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        );;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <div className="container">
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)} completed={completed[index]}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        {allStepsCompleted() ? (
          <div className="container">
            <div className="section-title">
              <h2 className="mb-3">
                All steps completed - you&apos;re finished
              </h2>
            <Button variant="contained" color="primary" href="/">
              Return to Home
            </Button>
            </div>
          </div>
        ) : (
          <div >
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="section-title">
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
