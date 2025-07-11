import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <Grid
          className="bg-gray-800 text-white text-center mt-10 py-3"
          container
        >
          <Grid item xs={6} md={3}>
            <Typography
              className="pb-5 text-gray-400"
              variant="h5"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Company
            </Typography>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                About
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Blog
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Press
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Job
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Partners
              </Button>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography
              className="pb-5 text-gray-400"
              variant="h5"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Solution
            </Typography>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Marketing
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Analatics
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Commerce
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Insights
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Support
              </Button>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography
              className="pb-5 text-gray-400"
              variant="h5"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Documentation
            </Typography>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Guide
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Api Status
              </Button>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography
              className="pb-5 text-gray-400"
              variant="h5"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Legal
            </Typography>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Claim
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Privacy
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Terms
              </Button>
            </div>
          </Grid>

          <Grid item xs={12}>
            <Typography className="py-4 text-sm text-gray-300">
              &copy; 2023 My Company. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
