import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

interface MoreInfoCardProps {
  header: string;
  body: string;
  img: string;
}

const InfoCard: React.FC<MoreInfoCardProps> = ({ header, body, img }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "360px",
        borderRadius: "20px",
        maxHeight: "410px",
        backgroundColor: "primary.body",
        border: "2px solid white",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ padding: "15px 20px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary.yorisWhite"
            style={{ fontFamily: "sarala" } as React.CSSProperties} // Inline CSS for font-sarala
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            color="primary.yorisWhite"
            style={{ fontFamily: "sarala" } as React.CSSProperties} // Inline CSS for font-sarala
          >
            {body.replace(/\s*\n\s*/g, " ").trim().length > 155
              ? body
                  .replace(/\s*\n\s*/g, " ")
                  .trim()
                  .slice(0, 155)
              : body}{" "}
            ...
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "5px 10px 10px 15px" }}>
          <Button size="medium" sx={{ color: "primary.yorisWhite" }}>
            See More <ChevronRight />
          </Button>
        </CardActions>
        <CardMedia sx={{ height: 170 }} image={img} title={img} />
      </CardActionArea>
    </Card>
  );
};

export default InfoCard;
