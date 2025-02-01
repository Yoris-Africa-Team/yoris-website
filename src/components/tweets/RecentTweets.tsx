// import { Client } from "twitter-api-sdk";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ScrollingTweetBanner from './ScrollingTwitterBanner';

const BEARER_TOKEN =
    'AAAAAAAAAAAAAAAAAAAAAFipmQEAAAAAKJ8CE7yA783f5zdyCE3lQwW6QPI%3D9K0kVBVMtucMzoF6Da2eZIQo8f3cw8kbMqWJR2LUKH1hbP3mZB';
const ACCESS_TOKEN = '842853695855493120-pdGiMmLwGJnjxm2nOpjKWVxujbp4GGD';
const ACCESS_TOKEN_SECRET = 'rWAuJSkojknNQRYYWjsspTBnM83qdVh6kNbve9hYzxod2';

export const main = async () => {
    // const client = new Client("MY-BEARER-TOKEN");
    // const tweet = await client.tweets.findTweetById("20");
    // console.log(tweet.data.text);
};

const RecentTweets = ({ tweetDetails }) => {
    return (
        <>
            {/* Scrolling Banner */}
            <Box
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '2rem',
                    paddingBottom: '4rem',
                    gap: '0.25rem',
                }}
            >
                {tweetDetails.map((item) => (
                    <ScrollingTweetBanner
                        images={item.images}
                        speed={item.speed}
                        direction={item.direction}
                    />
                ))}
            </Box>
        </>
    );
};

export default RecentTweets;
