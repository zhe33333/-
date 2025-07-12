import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import "./LoginPage.css";

export const Screen = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Login</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>@2025 WeTrade. All rights reserved.</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
