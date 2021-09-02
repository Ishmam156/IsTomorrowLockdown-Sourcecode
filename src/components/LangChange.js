/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Switch from 'react-switch';

// Swith to change the language of the website based on current lang
export const LangChange = ({ locale }) => {
    const router = useRouter();
    const isEn = locale === 'en';
    const toggleLangChange = async () => {
        await router.push('/', '/', {
            locale: locale === 'en' ? 'bd' : 'en'
        });
    };

    return (
        <>
            <Box position="absolute" top="0.7rem" left="1rem">
                <label htmlFor="small-radius-switch">
                    <Switch
                        checked={!isEn}
                        onChange={toggleLangChange}
                        handleDiameter={15}
                        offColor="#E8E9E8"
                        onColor="#E8E9E8"
                        offHandleColor="#E8E9E8"
                        onHandleColor="#E8E9E8"
                        height={25}
                        width={70}
                        borderRadius={15}
                        activeBoxShadow="0px 0px 1px 2px #D8D8D8"
                        uncheckedIcon={
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    fontSize: 12,
                                    color: 'black',
                                    paddingRight: 20
                                }}>
                                বাংলা
                            </div>
                        }
                        checkedIcon={
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    fontSize: 12,
                                    color: 'black',
                                    paddingLeft: 15
                                }}>
                                English
                            </div>
                        }
                        uncheckedHandleIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <mask id="a">
                                    <circle cx="256" cy="256" r="256" fill="#fff" />
                                </mask>
                                <g mask="url(#a)">
                                    <path fill="#496e2d" d="M0 0h512v512H0z" />
                                    <circle cx="200.3" cy="256" r="111.3" fill="#d80027" />
                                </g>
                            </svg>
                        }
                        checkedHandleIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <mask id="a">
                                    <circle cx="256" cy="256" r="256" fill="#fff" />
                                </mask>
                                <g mask="url(#a)">
                                    <path
                                        fill="#eee"
                                        d="M0 0h47.4l76.4 21 65.4-21h33.4l34.2 16.6L289.4 0h33.4l70.4 22.8L464.8 0h15.8l12.2 7.3L512 0v47.3l-19.9 78 19.9 63.9v33.4l-16.4 30.6 16.4 36.2v33.4l-15.1 68.7 15.1 73.3v15.9l-7.8 10.9L512 512h-47.3l-71-17.5-70.9 17.5h-33.4l-30-19.7-36.8 19.7h-33.3l-63.7-20.2L47.3 512H31.4l-10.6-8L0 512v-47.3l22.8-79L0 322.9v-33.4l25.3-32L0 222.6v-33.4l22.2-64.6L0 47.2V31.4l8-7.8z"
                                    />
                                    <path
                                        fill="#0052b4"
                                        d="m47.4 0 141.8 142V0H47.4zm275.4 0v142l142-142h-142zM0 47.2v142h142L0 47.2zm512 .1L370.1 189.2H512V47.3zM0 322.8v141.9l141.9-141.9H0zm370 0 142 142v-142H370zM189.3 370l-142 142h142V370zm133.5.1V512h141.9L322.8 370.1z"
                                    />
                                    <path
                                        fill="#d80027"
                                        d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0h-66.8z"
                                    />
                                    <path
                                        fill="#d80027"
                                        d="M0 0v31.4l157.7 157.8h31.5L0 0zm480.6 0L322.8 157.7v31.5L512 0h-31.4zM189.2 322.8 0 512h31.4l157.8-157.7v-31.5zm133.6 0L511.9 512h.1v-31.3L354.3 322.8h-31.5z"
                                    />
                                </g>
                            </svg>
                        }
                        className="react-switch"
                        id="small-radius-switch"
                    />
                </label>
            </Box>
        </>
    );
};
