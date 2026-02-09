import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaCircle } from 'react-icons/fa6';
import { IoMdArrowDropup } from 'react-icons/io';
import { questions } from "../constants/questions";

export default function Questions() {
    return (
        <>
            <section className="bg-white h-80vh pb-40 pt-50">
                <h2 className="text-3xl sm:text-4xl text-darkpink font-bold text-center mb-10">
                    PERGUNTAS FREQUENTES
                </h2>

                <div className='mt-10 px-40 flex flex-col center justify-center'>
                    {
                        questions.map((question, index) => {
                            return (
                                <Accordion
                                    sx={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        boxShadow: 'none',
                                        maxWidth: '800px',
                                        marginBottom: '20px',
                                        '& .MuiButtonBase-root': {
                                            height: 'max-content',
                                        },
                                        index
                                    }}>
                                    <AccordionSummary
                                        expandIcon={<IoMdArrowDropup size={25} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{
                                            maxWidth: 'max-content',
                                            margin: '0',
                                            '& .MuiAccordionSummary-content': {
                                                margin: 0
                                            }
                                        }}
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
                                                    fontSize: "20px"
                                                }}
                                            >
                                                {question.title}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            marginLeft: '30px',
                                            borderLeft: '2px solid #7F1146',
                                            textAlign: 'justify',
                                        }}
                                    >
                                        <Typography>
                                            {question.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}