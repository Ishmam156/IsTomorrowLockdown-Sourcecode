import { useColorMode, Box } from '@chakra-ui/react';
import Switch from 'react-switch';

// Swith to change color mode of website
export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
        <>
            <Box position="absolute" top="0.7rem" right="1rem">
                <label htmlFor="small-radius-switch">
                    <Switch
                        checked={isDark}
                        onChange={toggleColorMode}
                        handleDiameter={23}
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
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    height: '100%',
                                    fontSize: 12,
                                    color: 'black'
                                }}>
                                {colorMode === 'dark' ? 'Light ' : 'Dark'}
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
                                    paddingLeft: 20
                                }}>
                                {colorMode === 'dark' ? 'Light ' : 'Dark'}
                            </div>
                        }
                        uncheckedHandleIcon={
                            <svg viewBox="0 0 10 10" height="100%" width="100%" fill="black">
                                <circle r={3} cx={5} cy={5} stroke="#E6E6E6" strokeWidth="0.5" />
                            </svg>
                        }
                        checkedHandleIcon={
                            <svg viewBox="0 0 10 10" height="100%" width="100%" fill="white">
                                <circle r={3} cx={5} cy={5} stroke="#C0C0C0" strokeWidth="0.5" />
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
