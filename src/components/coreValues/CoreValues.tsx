import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ScrollingBlogBanner from "./ScrollingValuesBanner";

const BEARER_TOKEN: string =
  "AAAAAAAAAAAAAAAAAAAAAFipmQEAAAAAKJ8CE7yA783f5zdyCE3lQwW6QPI%3D9K0kVBVMtucMzoF6Da2eZIQo8f3cw8kbMqWJR2LUKH1hbP3mZB";
const ACCESS_TOKEN: string =
  "842853695855493120-pdGiMmLwGJnjxm2nOpjKWVxujbp4GGD";
const ACCESS_TOKEN_SECRET: string =
  "rWAuJSkojknNQRYYWjsspTBnM83qdVh6kNbve9hYzxod2";

export const main = async (): Promise<void> => {
  // const client = new Client("MY-BEARER-TOKEN");
  // const tweet = await client.tweets.findTweetById("20");
  // console.log(tweet.data.text);
};

interface Image {
  id: string;
  image: string;
}

const images: Image[] = [
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

const RecentBlogs: React.FC = () => {
  return (
    <Box className="w-full pt-14">
      <div className="flex justify-center text-start mt-12 w-full">
        <Typography
          variant="h3"
          className="w-full max-w-6xl px-5 md:px-8 text-white"
        >
          Core Values...
        </Typography>
      </div>

      {/* Scrolling Banner */}
      <Box className="w-full flex flex-col pt-8 pb-16 h-auto gap-8">
        <ScrollingBlogBanner images={images} speed={60000} />
      </Box>
    </Box>
  );
};

export default RecentBlogs;
