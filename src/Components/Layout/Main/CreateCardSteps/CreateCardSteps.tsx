import "./CreateCardSteps.css";

// // function CreateCardSteps(): JSX.Element {
// //     return (
// //         <div className="CreateCardSteps">
			
// //         </div>
// //     );
// // }

// // export default CreateCardSteps;

// // import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import { useState } from "react";
// import { userModel } from "../../../../Models/userModel";
// import FormStepOne from "./FormStepOne/FormStepOne";
// // import FormStepOne from "./FormStepOne/FormStepOne";


// const steps = [
//     'Fill Inoformation',
//   'Choose Template',
//   'Publish',
// ];

// export default function CreateCardSteps() {
//     let [stepNum, setStepNum] = useState<number>(0)
//     const [card, setCard] = useState<userModel>()
//     console.log(card);
    

//     let cardObj = {}
    
//     console.log(stepNum);
//     function stepNext(){
//         if(stepNum >= steps.length - 1) {
//             return;
//         } 
//         setStepNum(stepNum  = stepNum + 1)
//     }
    
//     function stepBack(){
//         if(stepNum <= 0) {
//             return;
//         } 
//         setStepNum(stepNum  = stepNum - 1)
//     }
    
//   return (
//       <Box sx={{ width: '100%' }}>
//         <button className="stepNum-button" onClick={stepNext}>Next</button>
//         <button className="stepNum-button" onClick={stepBack}>Back</button>
//       <Stepper activeStep={stepNum} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>
//                 {label}
//                 </StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div className="form-step-container">
//                 {stepNum == 0 ? <div> <FormStepOne card={() => setCard(card)}  /> </div> : <></>}
//                 {stepNum == 1 ? <div> 2 </div>  : <></>}
//                 {stepNum == 2 ? <div> 3 </div>  : <></>}
//       </div>
//     </Box>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { useEffect, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import PublishIcon from '@mui/icons-material/Publish';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FormStepOne from "./FormStepOne/FormStepOne";
import { cardModel } from "../../../../Models/cardModel";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));




function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  
  
  const icons: { [index: string]: React.ReactElement } = {
    1: <InfoIcon />,
    2: <AppRegistrationIcon />,
    3: <PublishIcon />,
  };
  
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function CustomizedSteppers() {
  let [stepNum, setStepNum] = useState<number>(0)

  function stepNext(){
    if(stepNum >= steps.length - 1) {
        return;
    } 
    setStepNum(stepNum  = stepNum + 1)
}

function stepBack(){
    if(stepNum <= 0) {
        return;
    } 
    setStepNum(stepNum  = stepNum - 1)
}

function checking(ob: any){
  console.log(ob);
  
}
    let cardObj = {}

    
    useEffect(() => {
      window.localStorage.removeItem("cardSteps");
      console.log(cardObj);
      
    }, [])

    const [Card, SetCard] = useState<cardModel>()
    function saveInfoCard(obb: any){
      SetCard(obb);
  stepNext();
  
}
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>

      <Stepper alternativeLabel activeStep={stepNum} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
            <div className="form-step-container">
                {stepNum == 0 ? <div> <FormStepOne card={cardObj}  saveInfo={(cardInfo) => saveInfoCard(cardInfo)}  /> </div> : <></>}
                {stepNum == 1 ? <div> 2 </div>  : <></>}
                {stepNum == 2 ? <div> 3 </div>  : <></>}
      </div>
        <button className="stepNum-button" onClick={stepNext}>Next</button>
        <button className="stepNum-button" onClick={stepBack}>Back</button>
    </Stack>
  );
}