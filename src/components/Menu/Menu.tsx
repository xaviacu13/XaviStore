import { FC } from "react";
import { Typography, Avatar, Button, Divider } from "@mui/material";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

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
        <div className={classes.contentLogo}>
        <Avatar
          alt="Avatar App"
          src={logo ? logo : ""}
          sx={{ width: 66, height: 66 }}
        />
        <div>
          <Typography variant="h4">{title}t</Typography>
          <Typography variant="body1">{subTitle}</Typography>
        </div>
        </div>
        <div className={classes.buttonContainer}>
          <div>
            <Select
              placeholder="Categorias"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: 180,
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="dog">Alimentos</Option>
              <Option value="cat">Medicamentos</Option>
              <Option value="fish">Herramientas</Option>
              <Option value="bird">Otros</Option>
            </Select>
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
      </div>
      <Divider />
    </div>
  );
};

export default Menu;
