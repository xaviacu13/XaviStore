import { FC } from "react";
import { Typography } from "@mui/material";

import useStyles from "./styles";

interface MenuProps {
  img: string
  title?: string | null | undefined;
}

const Home: FC<MenuProps> = ({ img, title }) => {
  const classes = useStyles();
  if (!img && !title) return null;
  return (
    <div className={classes.root}>
      <img
        src={img}
        alt="Granos Luna"
        width="100%"
      ></img>
      <div className={classes.title}>
      <Typography variant="h1">{title}</Typography>
      </div>
    </div>
  );
};

export default Home;
