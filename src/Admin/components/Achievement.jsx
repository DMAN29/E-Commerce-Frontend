import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 150,
  position: "absolute",
});
const Achievement = () => {
  return (
    <>
      <Card sx={{ position: "relative" }}>
        <CardContent>
          <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
            Shop Now
          </Typography>
          <Typography variant="body2">Congratulation 🥳</Typography>
          <Typography variant="h5" sx={{ my: 3.1 }}>
            {" "}
            420.8k{" "}
          </Typography>
          <Button size="small" variant="contained">
            View Sales
          </Button>
          <TriangleImg src=""></TriangleImg>
          <TrophyImg src="https://img.freepik.com/free-vector/realistic-illustration-gold-cup-with-red-ribbon-winner-leader-champion_1262-13474.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708992000&semt=ais"></TrophyImg>
        </CardContent>
      </Card>
    </>
  );
};

export default Achievement;
