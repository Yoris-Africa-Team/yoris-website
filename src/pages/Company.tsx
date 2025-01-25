import React, { useEffect, useState } from "react";
import "../styles/Company.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box, Grid, Radio, Typography } from "@mui/material";
import bottomImg from "../assets/images/bottom_img.png";
import CoreValues from "../components/coreValues/CoreValues";
import { Stack } from "@mui/system";
import TeamMember from "../components/cards/TeamMember";
import Header from "../components/navigations/Navbar";

interface TeamWithDept {
  isSelected: boolean;
  teamName: string;
  description: string;
}

interface TeamMemberDetails {
  memberName: string;
  teamName: string;
  designation: string;
  image: string;
  description: string;
  linkedinProfile: string;
  twitterProfile: string;
}

const Company: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [teamWithDept, setTeamWithDept] = useState<TeamWithDept[]>([
    {
      isSelected: true,
      teamName: "Engineering",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est in caeli. Lorem nora poque in saecula... Lorem ipsum dolor sit manet exesiam norem patri...",
    },
    {
      isSelected: false,
      teamName: "Operation",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est in caeli. Lorem nora poque in saecula... Lorem nora poque in saecula...",
    },
    {
      isSelected: false,
      teamName: "Customer Relations",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est Pater Nostra qui est in caeli. Lorem nora poque in saecula...",
    },
    {
      isSelected: false,
      teamName: "Logistics Operations",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est in caeli. Lorem nora poque in saecula...",
    },
    {
      isSelected: false,
      teamName: "Growth & Marketing - PR",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri. Pater Nostra qui est in caeli. Lorem nora poque in saecula. Lorem ipsum dolor sit manet exesiam norem patri. Pater Nostra qui est in caeli. Lorem nora poque in saecula. Pater Nostra qui est in caeli. Lorem nora poque in saecula...",
    },
  ]);

  const [deptDesc, setDeptDesc] = useState<string>(
    "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est in caeli..."
  );

  const toggleTeamWithDept = (id: number): void => {
    const newTeamWithDept = [...teamWithDept];
    newTeamWithDept.forEach((item, index) => {
      if (id === index) {
        item.isSelected = true;
        setDeptDesc(item.description);
      } else {
        item.isSelected = false;
      }
    });
    setTeamWithDept(newTeamWithDept);
  };

  const [selectedTeamMembers, setSelectedTeamMembers] = useState<
    TeamMemberDetails[]
  >([
    {
      memberName: "Godwin Mbanefo",
      teamName: "Operation",
      designation: "CEO",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est in...",
      linkedinProfile: "https://linkedin.com",
      twitterProfile: "https://twitter.com",
    },
    {
      memberName: "Kene Nnakwue",
      teamName: "Engineering",
      designation: "Web Developer",
      image:
        "https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est in caeli...",
      linkedinProfile: "https://linkedin.com",
      twitterProfile: "https://twitter.com",
    },
    {
      memberName: "Zacks Orji",
      teamName: "Engineering",
      designation: "Web Developer",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Lorem ipsum dolor sit manet exesiam norem patri... Pater Nostra qui est in caeli...",
      linkedinProfile: "https://linkedin.com",
      twitterProfile: "https://twitter.com",
    },
    // Add the rest of the team members similarly...
  ]);

  return (
    <Box
      className="relative flex flex-col items-center pb-8"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="700"
      id="#"
    >
      <Header />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/5add/8360/0a99fcbba6431d5e129f4842af928894?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g8eiX1YCAnxrWmuFhX-IHkTwEDq0QaTdSCEz-CYqmeY7S1B1JyFmUXgbHJRsY6O4zo~txoddRsicrgAVr-GHXHwfVWZ-bSHHZlW06q6K-Dw~6EeLM1NOO9qmx3RSq55X2jQld8zE~975SC-CHflic7-vq7doOam-LhIHa1z6hCpM6D2psr4CUQrpEJ00AEs-wmDulOXgR81u42hrYgnYChcYClMKPwCkf5oHrL-Poae9-SkqlBcEm1mv5bBhE2-sBeHM3bb181CpTXbYGhul4RooMUdNhQRBzjQEK0xDZ92BAm8-okmdwtc5EnUGrh9ymzrIDmzaMaaQped~E6WNpw__"
          alt="gif"
          style={{
            width: "100%",
            height: "94vh",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box className="flex flex-col items-center">
        {/* PLACE UNDER HERE */}
        <div className="l-shaped-container">
          <div className="horizontal-rectangle">
            <div className="msg-box">
              <p className="text-white text-my-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum quasi incidunt minus ducimus enim in, temporibus animi
                placeat cum. Amet esse consectetur dolor cumque illum iure autem
                sapiente pariatur possimus.
              </p>
            </div>
          </div>
          <div className="vertical-square">
            <div className="founder-box">
              <p className="text-white text-my-sm">Founder's Story</p>
            </div>
            <div className="founder-img"></div>
            <div className="founder-box-var flex flex-col items-center">
              <p className="text-white text-my-sm">Godwin Yoris</p>
              <p className="text-[#C3AD60] text-my-md">CEO / CO-FOUNDER</p>
            </div>
          </div>
        </div>

        {/* Core values */}
        <CoreValues />

        {/* Teams and Depts */}
        <Box className="w-full max-w-7xl flex flex-col items-center pt-2 px-2 md:px-8">
          <Box className="w-full flex justify-between md:p-5 lg:p-8 lg:px-10 md:border-2 md:border-black sm:bg-transparent md:bg-[#E6DDBE] rounded-2xl">
            <Stack className="w-1/2 lg:w-2/5 pl-3">
              <Typography
                variant={isSmallScreen || isTabletScreen ? "h5" : "h4"}
                className="text-white md:text-black pb-4"
              >
                Teams.
              </Typography>
              <Stack gap={1} sx={{ color: "primary.yorisWhite" }}>
                {teamWithDept.map((item, index) => (
                  <Box
                    key={index}
                    onClick={() => toggleTeamWithDept(index)}
                    sx={{
                      alignSelf: "start",
                      cursor: "pointer",
                      fontSize: { xs: "0.75rem", md: "0.875rem" }, // xs -> text-xs, md -> text-sm
                      "@media (min-width:768px)": { color: "black" }, // md -> md:text-black
                      fontWeight: "600", // font-semibold
                      paddingY: "4px", // py-1
                      ...(item.isSelected && {
                        paddingX: { sm: "8px", md: "12px" }, // px-2 -> 8px, md:px-3 -> 12px
                        borderRadius: "8px", // rounded-md
                        backgroundColor: { sm: "#C3AD60", md: "white" }, // bg-[#C3AD60], md:bg-white
                      }),
                    }}
                  >
                    {item.teamName}
                  </Box>
                ))}
              </Stack>
            </Stack>
            <Stack className="w-1/2 lg:w-3/5 pl- pr-3">
              <Typography
                variant={isSmallScreen || isTabletScreen ? "h5" : "h4"}
                className="text-white md:text-black pb-4 font-black"
              >
                Department.
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#C3AD60", // default background color
                  borderRadius: "1rem", // equivalent to `rounded-xl`
                  padding: "12px", // default padding (equivalent to `p-3`)
                  "@media (min-width:768px)": { backgroundColor: "black" }, // sm: black
                  "@media (min-width:900px)": { padding: "20px" }, // md: p-5
                }}
              >
                <Typography
                  variant="caption"
                  component="p"
                  sx={{ fontWeight: 500 }}
                  className="font-light text-black md:text-white"
                >
                  {deptDesc}
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Team Members */}
          <Box className="w-full flex flex-col px-3 pt-16">
            <Box>
              <Typography variant="h3">People</Typography>
            </Box>
            <Grid container spacing={3}>
              {selectedTeamMembers.map((member) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={member.memberName}>
                  <TeamMember details={member} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Company;
