import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaCircle } from 'react-icons/fa6';
import { IoMdArrowDropup } from 'react-icons/io';

export default function Quests() {
    return (
        <>
            <section className="bg-white min-h-screen pb-40 pt-30">
                <h2 className="text-3xl sm:text-4xl text-darkpink font-bold text-center mb-10">
                    PERGUNTAS FREQUENTES
                </h2>

                <div className='mt-10 px-40'>
                    <Accordion sx={{ 
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        maxWidth: '800px'
                        }}>
                        <AccordionSummary
                            expandIcon={<IoMdArrowDropup size={25} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Box
                                className="flex items-center gap-2">
                                <FaCircle
                                    size={10}
                                    color="#7F1146"
                                />
                                <Typography
                                component="h2"
                                sx={{
                                    fontSize:"15px"
                                }}
                                >Pergunta 1</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </section>
        </>
    );
}