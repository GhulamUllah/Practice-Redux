import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import demo from "../../static/demo.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 2,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  price: {
    color: theme.palette.secondary.main,
  },
  addToCart: {
    marginTop: theme.spacing(2),
    background: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
}));

export default function ProductCard({ image, title, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image ? image : demo}
        title={"title"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {"title"}
        </Typography>
        <Typography variant="body2" className={classes.price}>
          ${"price"}
        </Typography>
        <Button variant="contained" className={classes.addToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
