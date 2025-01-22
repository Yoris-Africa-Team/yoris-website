import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionHeaderText = ({ children }) => {
  return (
    <Typography style={{ display: 'flex', paddingBlock: '0.5rem', color: '#231f11', fontWeight: '600', fontFamily: 'Sarala' }}>
      {children}
    </Typography>
  )
}

const FAQs = () => {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
      style={{ gap: '1.25rem', padding: '1rem', overflow: 'hidden' }}
    >
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box sx={{ borderRadius: '15px', }}>
          <Accordion sx={{ backgroundColor: '#fffefc' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionHeaderText>Do businesses really get free websites and apps?</AccordionHeaderText>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed velit proin nibh fames facilisi semper. Condimentum enim risus commodo ipsum.
                Semper ac gravida nascetur et malesuada. At cras elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ borderRadius: '15px', overflow: 'hidden', }}>
          <Accordion sx={{ backgroundColor: '#86ddca' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <AccordionHeaderText>What is puddle?</AccordionHeaderText>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed velit proin nibh fames facilisi semper. Condimentum enim risus commodo ipsum.
                Semper ac gravida nascetur et malesuada. At cras elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ borderRadius: '15px', overflow: 'hidden', }}>
          <Accordion sx={{ backgroundColor: '#fffefc' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <AccordionHeaderText>Is it true i can ship for as low as 300 Naira?</AccordionHeaderText>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed velit proin nibh fames facilisi semper. Condimentum enim risus commodo ipsum.
                Semper ac gravida nascetur et malesuada. At cras elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ borderRadius: '15px', overflow: 'hidden', }}>
          <Accordion sx={{ backgroundColor: '#fffefc' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <AccordionHeaderText>Where is your delivery coverage ?</AccordionHeaderText>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed velit proin nibh fames facilisi semper. Condimentum enim risus commodo ipsum.
                Semper ac gravida nascetur et malesuada. At cras elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box sx={{ borderRadius: '15px', overflow: 'hidden', }}>
          <Accordion sx={{ backgroundColor: '#cdbb7b' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <AccordionHeaderText>What is Puddle?</AccordionHeaderText>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed velit proin nibh fames facilisi semper. Condimentum enim risus commodo ipsum.
                Semper ac gravida nascetur et malesuada. At cras elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ borderRadius: '15px', overflow: 'hidden', }}>
          <Accordion sx={{ backgroundColor: '#fffefc' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <AccordionHeaderText>Is it true i can be a female rider?</AccordionHeaderText>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed velit proin nibh fames facilisi semper. Condimentum enim risus commodo ipsum.
                Semper ac gravida nascetur et malesuada. At cras elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ borderRadius: '15px', overflow: 'hidden', }}>
          <Accordion sx={{ backgroundColor: '#cdbb7b' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <AccordionHeaderText>What is Puddle?</AccordionHeaderText>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sed velit proin nibh fames facilisi semper. Condimentum enim risus commodo ipsum.
                Semper ac gravida nascetur et malesuada. At cras elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Stack>
  )
}

export default FAQs;