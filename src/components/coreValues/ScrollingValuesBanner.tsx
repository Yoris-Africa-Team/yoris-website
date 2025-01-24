import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../../styles/scrollingBanner.css";

interface Image {
  id: string;
  image: string;
}

interface ScrollingBannerProps {
  images: Image[];
  speed?: number;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  images,
  speed = 5000,
}) => {
  return (
    <div className="content">
      <div className="wrapper h-full">
        {new Array(3).fill("").map((_, index) => (
          <section
            style={{ "--speed": `${speed}ms` } as React.CSSProperties}
            key={index}
          >
            {images.map(({ id, image }) => (
              <div className="px-3" key={id}>
                <div className="image rounded-2xl h-full w-72 lg:w-80 overflow-hidden shadow-lg bg-white bg-opacity-10 hover:bg-[#C3AD60] hover:text-white cursor-pointer">
                  <Box
                    sx={{
                      color: "secondary.main",
                      backgroundColor: "#E6DDBE",
                    }}
                    className="relative flex flex-col overflow-hidden h-full"
                  >
                    <Stack className="px-5 py-4 h-full" gap={1}>
                      <Box className="mb-auto">
                        <Typography
                          component="h4"
                          variant="h4"
                          className="text-center"
                        >
                          Team Work
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1}>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          gap={2}
                          width="100%"
                        >
                          <Box className="relative">
                            <Box
                              className="w-28 h-28 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                            <Box
                              className="absolute top-2 left-2 w-24 h-24 rounded-full"
                              sx={{ backgroundColor: "secondary.main" }}
                            ></Box>
                            <Box
                              className="absolute top-4 left-4 w-20 h-20 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                          </Box>
                          <Box className="relative">
                            <Box
                              className="w-28 h-28 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                            <Box
                              className="absolute top-2 left-2 w-24 h-24 rounded-full"
                              sx={{ backgroundColor: "secondary.main" }}
                            ></Box>
                            <Box
                              className="absolute top-4 left-4 w-20 h-20 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                          </Box>
                        </Stack>
                      </Stack>
                      <Stack direction="row" gap={2}>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          gap={2}
                          width="100%"
                        >
                          <Box className="relative">
                            <Box
                              className="w-28 h-28 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                            <Box
                              className="absolute top-2 left-2 w-24 h-24 rounded-full"
                              sx={{ backgroundColor: "secondary.main" }}
                            ></Box>
                            <Box
                              className="absolute top-4 left-4 w-20 h-20 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                          </Box>
                          <Box className="relative">
                            <Box
                              className="w-28 h-28 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                            <Box
                              className="absolute top-2 left-2 w-24 h-24 rounded-full"
                              sx={{ backgroundColor: "secondary.main" }}
                            ></Box>
                            <Box
                              className="absolute top-4 left-4 w-20 h-20 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                          </Box>
                        </Stack>
                      </Stack>
                      <Stack direction="row" gap={1}>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          gap={2}
                          width="100%"
                        >
                          <Box className="relative">
                            <Box
                              className="w-28 h-28 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                            <Box
                              className="absolute top-2 left-2 w-24 h-24 rounded-full"
                              sx={{ backgroundColor: "secondary.main" }}
                            ></Box>
                            <Box
                              className="absolute top-4 left-4 w-20 h-20 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                          </Box>
                          <Box className="relative">
                            <Box
                              className="w-28 h-28 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                            <Box
                              className="absolute top-2 left-2 w-24 h-24 rounded-full"
                              sx={{ backgroundColor: "secondary.main" }}
                            ></Box>
                            <Box
                              className="absolute top-4 left-4 w-20 h-20 rounded-full"
                              sx={{ backgroundColor: "primary.darkYellow" }}
                            ></Box>
                          </Box>
                        </Stack>
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
