import { FC } from "react";
import { Typography, Avatar, Button, Divider } from "@mui/material";

import useStyles from "./styles";

interface MenuProps {
  logo?: string | null | undefined;
  title?: string | null | undefined;
  subTitle?: string | null | undefined;
  url?: string | null | undefined;
}

const Menu: FC<MenuProps> = ({ logo, title, subTitle, url }) => {
  const classes = useStyles();
  if (!logo && !title && subTitle && !url) return null;
  return (
    <div className="container">
      <div className={classes.root}>
        <Avatar
          alt="Avatar App"
          src={logo ? logo : ""}
          sx={{ width: 66, height: 66 }}
        />
        <div>
          <Typography variant="h4">{title}t</Typography>
          <Typography variant="body1">{subTitle}</Typography>
        </div>
        <div>
          <Button>Nosotros</Button>
        </div>
        <div>
          <Button>Productos</Button>
        </div>
        <div>
          <Button>Contactos</Button>
        </div>
        <div>
          <Button variant="contained">Login</Button>
        </div>
      </div>
      <Divider/>
    </div>
  );
};

export default Menu;
