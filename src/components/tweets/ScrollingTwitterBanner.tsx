import { Twitter } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import '../../styles/scrollingBanner.css';

const ScrollingTweetBanner = ({ images, speed = 5000, direction }) => {
    return (
        <div
            style={{
                padding: '1rem',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {new Array(3).fill('').map(() => (
                    <section
                        className={direction === 'forward' ? 'section-forward' : 'section-backward'}
                        style={{ '--speed': `${speed}ms` }}
                    >
                        {images.map(({ id, image }) => (
                            <div
                                key={id}
                                style={{
                                    padding: '0.75rem',
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    style={{
                                        borderRadius: '1.5rem',
                                        padding: '1rem',
                                        width: '16rem',
                                        height: '100%',
                                        maxWidth: '18rem',
                                        maxHeight: '14rem',
                                        overflow: 'hidden',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: '#fffdd4',
                                        color: '#231F11',
                                        border: '1px solid #fffdd4',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease-in-out',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#231F11';
                                        e.currentTarget.style.color = '#FFFDD4';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#fffdd4';
                                        e.currentTarget.style.color = '#231F11';
                                    }}
                                >
                                    <Box
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.5rem',
                                            height: 'auto',
                                            maxHeight: '100%',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Stack direction="row" justifyContent="space-between">
                                            <Stack direction="row" gap={1}>
                                                <Avatar
                                                    alt="Twitter User"
                                                    src={image}
                                                    sx={{
                                                        width: {
                                                            xs: 40,
                                                            md: 50,
                                                        },
                                                        height: {
                                                            xs: 40,
                                                            md: 50,
                                                        },
                                                    }}
                                                />
                                                <Stack>
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                xs: 14,
                                                                md: 16,
                                                            },
                                                            fontWeight: '600',
                                                        }}
                                                    >
                                                        {'Kene Nnakwue yue'.slice(0, 14)}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                xs: 13,
                                                                md: 15,
                                                            },
                                                            fontWeight: '300',
                                                        }}
                                                    >
                                                        @kenny_nnakwue
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Avatar sx={{ bgcolor: '#231F11' }}>
                                                <Twitter />
                                            </Avatar>
                                        </Stack>
                                        <Typography variant="body2">
                                            Lorem ipsum dolor sit manet exesiam norem patri... Pater
                                            Nostra qui est in caeli. Lorem nora poque in saecula...
                                            Lorem ipsum dolor sit manet exesiam norem patri... Pater
                                            Nostra qui est in caeli. Lorem nora poque in saecula...
                                        </Typography> 
                                    </Box>
                                </Box>
                            </div> 
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ScrollingTweetBanner;
