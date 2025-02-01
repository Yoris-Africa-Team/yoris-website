import {
    ChevronRight,
    RemoveRedEye,
    Twitter,
} from '@mui/icons-material';
import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import '../../styles/scrollingBanner.css';

const ScrollingBanner = ({ images, speed = 5000, direction }) => {
    return (
        <div className="content">
            <div style={{ height: '100%' }}>
                {new Array(3).fill('').map(() => (
                    <section
                        className={direction === 'forward' ? 'section-forward' : 'section-backward'}
                        style={{ '--speed': `${speed}ms` }}
                    >
                        {images.map(({ id, image }) => (
                            <div
                                key={id}
                                style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}
                            >
                                <div
                                    style={{
                                        borderRadius: '1rem',
                                        height: '100%',
                                        width: '18rem',
                                        overflow: 'hidden',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s, color 0.3s',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#C3AD60';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.color = 'inherit';
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: 'secondary.main',
                                            backgroundColor: 'primary.lightYellow',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position: 'relative',
                                            height: '100%',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Box style={{ position: 'absolute', top: '0', padding: '0.5rem' }}>
                                            <Chip
                                                label={
                                                    <>
                                                        <RemoveRedEye /> 23
                                                    </>
                                                }
                                                sx={{ color: 'primary.light' }}
                                                variant="outlined"
                                                clickable
                                            />
                                        </Box>
                                        <Box style={{ height: '18rem', objectFit: 'cover' }}>
                                            <img
                                                style={{ height: '100%', width: '100%' }}
                                                src={image}
                                                alt={image}
                                            />
                                        </Box>
                                        <Stack style={{ padding: '0.75rem' }} gap={1}>
                                            <Typography
                                                variant="h6"
                                                sx={{ margin: 0, padding: 0 }}
                                            >
                                                Do business really get free website and a...
                                            </Typography>
                                            <Stack
                                                direction="row"
                                                gap={1}
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Stack gap={0.5}>
                                                    <Stack
                                                        direction="row"
                                                        gap={1}
                                                        alignItems="center"
                                                        style={{ color: '#4A5568' }} // gray-600
                                                    >
                                                        <Typography variant="caption">The</Typography>
                                                        <Avatar
                                                            alt="Twitter User"
                                                            src={image}
                                                            sx={{
                                                                width: {
                                                                    xs: 20,
                                                                    md: 25,
                                                                },
                                                                height: {
                                                                    xs: 20,
                                                                    md: 25,
                                                                },
                                                            }}
                                                        />
                                                        <Typography variant="caption">
                                                            Kene Nnakwue
                                                        </Typography>
                                                    </Stack>
                                                    <Typography
                                                        variant="caption"
                                                        style={{ color: '#4A5568' }} // gray-600
                                                    >
                                                        03:32 PM Friday 31
                                                    </Typography>
                                                </Stack>
                                                <Button
                                                    variant="filled"
                                                    size="small"
                                                    sx={{
                                                        color: 'primary.yorisWhite',
                                                        backgroundColor: 'primary.darkYellow',
                                                        borderRadius: '20px',
                                                        textTransform: 'none',
                                                    }}
                                                >
                                                    Read More
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </div>
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ScrollingBanner;
