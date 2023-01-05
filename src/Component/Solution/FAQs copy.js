import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({ faqList }) {
  return (
    <div>
      {faqList.map((v) => {
        return (
          <>
            <Accordion key={v.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{v.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {v.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        )
      })}
    </div>
  );
}