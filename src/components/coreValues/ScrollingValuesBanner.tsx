import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../../styles/scrollingBanner.css";

const ScrollingBanner = () => {
  return (
    <div className="content">
      <div className="">
        <section>
          <div className="px-3">
            <div className="image rounded-2xl h-full w-72 lg:w-80  shadow-lg bg-white bg-opacity-10 hover:bg-[#C3AD60] hover:text-white cursor-pointer">
              <Box
                sx={{
                  color: "secondary.main",
                  backgroundColor: "#E6DDBE",
                }}
                className="relative flex flex-col rounded-2xl"
              >
                <Stack className="px-5 py-4 h-[400px]" gap={1}>
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
                      <Box className="relative top-6 left-[-30px]">
                        <Box
                          className="w-24 h-24 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-2 left-2 w-20 h-20 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                        <Box
                          className="absolute top-4 left-4 w-16 h-16 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-6 left-6 w-12 h-12 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                      </Box>
                      <Box className="relative top-6 right-[-30px]">
                        <Box
                          className="w-24 h-24 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-2 left-2 w-20 h-20 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                        <Box
                          className="absolute top-4 left-4 w-16 h-16 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-6 left-6 w-12 h-12 rounded-full"
                          sx={{ backgroundColor: "black" }}
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
                      <Box className="relative top-[-30px]">
                        <Box
                          className="w-24 h-24 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-2 left-2 w-20 h-20 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                        <Box
                          className="absolute top-4 left-4 w-16 h-16 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-6 left-6 w-12 h-12 rounded-full"
                          sx={{ backgroundColor: "black" }}
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
                      <Box className="relative top-[-34px]">
                        <Box
                          className="w-24 h-24 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-2 left-2 w-20 h-20 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                        <Box
                          className="absolute top-4 left-4 w-16 h-16 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-6 left-6 w-12 h-12 rounded-full"
                          sx={{ backgroundColor: "black" }}
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
                      <Box className="relative top-[-180px] left-[-35px]">
                        <Box
                          className="w-24 h-24 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-2 left-2 w-20 h-20 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                        <Box
                          className="absolute top-4 left-4 w-16 h-16 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-6 left-6 w-12 h-12 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                      </Box>
                      <Box className="relative top-[-180px] right-[-35px]">
                        <Box
                          className="w-24 h-24 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-2 left-2 w-20 h-20 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                        <Box
                          className="absolute top-4 left-4 w-16 h-16 rounded-full"
                          sx={{ backgroundColor: "#C3AD60" }}
                        ></Box>
                        <Box
                          className="absolute top-6 left-6 w-12 h-12 rounded-full"
                          sx={{ backgroundColor: "black" }}
                        ></Box>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollingBanner;
