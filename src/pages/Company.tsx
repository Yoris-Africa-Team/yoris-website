import React, {  useState } from "react";
import "../styles/Company.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box, Grid, Radio, Typography } from "@mui/material";
import CoreValues from "../components/coreValues/CoreValues";
import { Stack } from "@mui/system";
import TeamMember from "../components/cards/TeamMember";
import Header from "../components/navigations/Navbar";
import introBg from "../assets/images/intro_bg.svg";

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

  const [selectedTeamMembers] = useState<
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
          src={introBg}
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
        <Box
          sx={{ borderColor: "primary.main" }}
          className="h-full w-full max-w-[90%] md:max-w-6xl overflow-hidden -mt-20 md:-mt-44 z-100 sticky flex flex-col lg:flex-row divide-[#E1C562] divide-y-2 lg:divide-y-0 lg:divide-x-2 border-[3px] rounded-2xl shadow shadow-[#C3AD60]"
        >
          <Box className="w-full h-auto lg:w-2/5 p-3 md:p-5 lg:p-8 flex flex-col items-center justify-start">
            <Box
              className="flex items-center justify-center py-3 w-full rounded-lg max-w-[300px] md:max-w-[500px] mb-1 font-bold text-center uppercase"
              sx={{ backgroundColor: "black", color: "primary.yorisWhite" }}
            >
              <Radio checked sx={{ color: "primary-main" }} />
              Founder's Story
            </Box>
            <Box className="rounded-xl max-h-[390px] md:max-h-[550px] w-full max-w-[300px] md:max-w-[450px] overflow-hidden">
              <img
                className="h-full w-full object-fit"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Box>
            <Box className="py-2 text-center">
              <Typography
                sx={{ color: "primary.yorisWhite", fontWeight: "400" }}
              >
                Godwin Mbanefo
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                CEO / CO-FOUNDER
              </Typography>
            </Box>
          </Box>
          <Box
            className="flex flex-col gap-1 p-5 md:p-8 w-full h-96 md:h-auto overflow-y-auto lg:w-3/5 text-justify"
            sx={{
              backgroundColor: "secondary.main",
              color: "primary.yorisWhite",
            }}
          >
            <Typography>
              In 2019, running a thriving international logistics company that
              ships from china to Nigeria, i had a bad news which involved my
              dad undergoing a surgery which lead him to a partial stroke so in
              the bid to be supportive to the family i left china to Nigeria
              which left my business in on total dismay due to the covid-19
              pandemic which caused a global lockdown and got me stuck in
              Nigeria.
            </Typography>
            <Typography>
              This lead me to starting out a delivery company which was my
              initial plan but this time with the motive to understand the
              relationships between businesses and consumers and it felt
              miserable and difficult for me having access to the most basic
              commodities from even the closest small or even medium scale brand
              around my location online. This hence put me on a mission to find
              out how brand accessibility was not only a problem i experienced
              but also a problem experienced by millions of Nigerians.
            </Typography>
            <Typography>
              We then started to calculate and understand the cost of online
              presences in Nigeria and in Africa, which then brought us to the
              understanding of the high and unsustainable cost of online
              presence of African businesses as the cost or websites and apps
              where not sustainable for small and medium scale businesses
              leaving about 40% of the African population depending on social
              media for business and about 30% completely offline.
            </Typography>
            <Typography>
              This lead i and my team to building what we described as the first
              ever “AFRICAN APP STORE” which embodied not just brand
              accessibility but also brand identity as we automated the
              development of “Mini mobile apps and MINI - web apps” for
              businesses and affordable delivery fares.
            </Typography>
            <Typography>
              Our offical software launch to the public was in febuary 2023 and
              we have since then been advocates for change to the African
              continent.
            </Typography>
          </Box>
        </Box>

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
              <Typography variant="h3" className="p-3 text-white">
                People
              </Typography>
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
