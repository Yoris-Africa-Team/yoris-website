import { LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface TeamMemberProps {
  details: {
    image: string;
    teamName: string;
    description: string;
    twitterProfile: string;
    linkedinProfile: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ details }) => {
  return (
    <Box className="relative flex flex-col gap-1 rounded-lg overflow-hidden">
      <Box
        sx={{ backgroundColor: "primary.main" }}
        className="absolute top-0 left-0 -z-10 w-full h-full flex px-1"
      >
        <Box className="w-full h-full bg-black"></Box>
      </Box>
      <Box className="rounded-lg overflow-hidden">
        <img
          className="aspect-square object-cover object-top"
          src={details.image}
          alt=""
        />
      </Box>
      <Box
        sx={{ backgroundColor: "primary.lightYellow", color: "primary.dark" }}
        className="relative w-full flex flex-col p-3 pb-10 border-t-4 border-red-600 rounded-lg overflow-hidden"
      >
        <Box className="absolute bottom-0 right-5 py-1 flex">
          <IconButton
            onClick={() => console.log(details.twitterProfile)}
            sx={{
              "&:hover": {
                color: "secondary.light",
              },
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            onClick={() => console.log(details.linkedinProfile)}
            sx={{
              "&:hover": {
                color: "#0072b1",
              },
            }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
        <Typography
          sx={{ fontWeight: 300, fontFamily: "roboto" }}
          className="italic text-gray-800"
        >
          {details.teamName}
        </Typography>
        <Typography
          sx={{ color: "primary.dark", fontWeight: 400 }}
          className="pb-4"
        >
          Web Developer
        </Typography>
        <Typography variant="caption" sx={{ color: "primary.dark" }}>
          {details.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamMember;
