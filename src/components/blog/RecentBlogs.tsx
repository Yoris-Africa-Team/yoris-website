// import { Client } from "twitter-api-sdk";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ScrollingBlogBanner from './ScrollingBlogBanner';

const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAFipmQEAAAAAKJ8CE7yA783f5zdyCE3lQwW6QPI%3D9K0kVBVMtucMzoF6Da2eZIQo8f3cw8kbMqWJR2LUKH1hbP3mZB';
const ACCESS_TOKEN = '842853695855493120-pdGiMmLwGJnjxm2nOpjKWVxujbp4GGD';
const ACCESS_TOKEN_SECRET = 'rWAuJSkojknNQRYYWjsspTBnM83qdVh6kNbve9hYzxod2';

export const main = async () => {
  // const client = new Client("MY-BEARER-TOKEN");
  // const tweet = await client.tweets.findTweetById("20");
  // console.log(tweet.data.text);
};

const RecentBlogs = ({ blogDetails }) => {
  return (
    <div
      id="blogs"
      style={{
        width: '100%',
      }}
    >
      <Box
        id="recent-tweets"
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'start',
          marginTop: '2rem',
          width: '100%',
        }}
      >
        <Typography
          variant="h4"
          style={{
            width: '100%',
            maxWidth: '112rem',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          }}
          sx={{ color: 'primary.yorisWhite' }}
        >
          Blogs
        </Typography>
      </Box>

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
        {blogDetails.map((item) => (
          <ScrollingBlogBanner
            images={item.images}
            speed={item.speed}
            direction={item.direction}
          />
        ))}
      </Box>
    </div>
  );
};

export default RecentBlogs;
