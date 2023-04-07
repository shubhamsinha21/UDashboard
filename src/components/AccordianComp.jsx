import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordianComp() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Washing Machine</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Whirlpool 6.5 Kg 5 Star Royal Fully-Automatic Top Loading Washing
            Machine
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Air Cooler</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bajaj DMH70 70 litres Desert Air Cooler with Turbo Fan technology
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>AC</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Havells-Lloyd 1.5 Ton 5 Star Inverter Split AC.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Refrigerator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            LG 215 Litres 3 Star Single Door Refrigerator, Blue Euphoria
            GL-B221ABED. ₹18,512.00 ₹24,999.00.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
