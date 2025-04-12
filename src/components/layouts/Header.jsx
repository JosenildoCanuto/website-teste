import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import { useLocation } from "@reach/router";

// material-ui
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// project import
import Logo from "../logo";
import IconButton from "../@extended/IconButton";

import { APP_DEFAULT_PATH, ThemeMode } from "../../config";

// assets
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import User from "../../images/drawers/user.svg";
import Dashboard from "../../images/drawers/dashboard.svg";
import Shopping from "../../images/drawers/shopping.svg";
import Folder from "../../images/drawers/folder.svg";
import Phone from "../../images/drawers/phone.svg";
import Book from "../../images/drawers/book.svg";

// ==============================|| COMPONENTS - APP BAR ||============================== //

// elevation scroll
function ElevationScroll({ children, window }) {
  // const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined,
  });

  // const backColorScroll = theme.palette.mode === ThemeMode.DARK ? theme.palette.grey[50] : theme.palette.grey[800];

  return React.cloneElement(children, {
    style: {
      background: trigger ? "#FFFFFF" : "transparent",
    },
  });
}

export default function Header() {
  const theme = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  const downMD = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerToggle, setDrawerToggle] = useState(false);

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "transparent",
          color: "text.primary",
          boxShadow: "none",
        }}
      >
        <Container disableGutters={downMD}>
          <Toolbar
            sx={{
              px: { xs: 1.5, md: 0, lg: 0 },
              py: 2,
              width: "100%",
              overflowX: "hidden",
            }}
          >
            <Stack
              direction="row"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              alignItems="center"
            >
              <Typography sx={{ textAlign: "left", display: "inline-block" }}>
                <Logo reverse component={GatsbyLink} to="/" />
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                "& .header-link": {
                  px: 1,
                  "&:hover": { color: "primary.main" },
                },
                display: { xs: "none", md: "flex" },
              }}
              spacing={4}
            >
              <Link
                className="header-link"
                color="primary"
                component={GatsbyLink}
                to={"/login"}
                underline="none"
              >
                <Typography>Login</Typography>
              </Link>
              <Link
                className="header-link"
                color={isActive("/productos") ? "primary" : "text.primary"}
                component={GatsbyLink}
                to="/productos"
                underline="none"
              >
                <Typography>Productos</Typography>
              </Link>
              <Link
                className="header-link"
                color={isActive("/servicios") ? "primary" : "text.primary"}
                component={GatsbyLink}
                to="/servicios"
                underline="none"
              >
                <Typography>Servicios</Typography>
              </Link>
              <Link
                className="header-link"
                color={isActive("/cursos") ? "primary" : "text.primary"}
                component={GatsbyLink}
                to="/cursos"
                underline="none"
              >
                <Typography>Cursos</Typography>
              </Link>
              <Link
                className="header-link"
                color={isActive("/contacto") ? "primary" : "text.primary"}
                component={GatsbyLink}
                to="/contact-us"
                underline="none"
              >
                <Typography>Contacto</Typography>
              </Link>
            </Stack>
            <Box
              sx={{
                width: "100vw",
                maxWidth: "100%",
                overflowX: "hidden",
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "space-between",
                px: 2, // padding lateral pro mobile
                boxSizing: "border-box",
              }}
            >
              <Typography sx={{ textAlign: "left", display: "inline-block" }}>
                <Logo reverse component={GatsbyLink} to="/" />
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  component={GatsbyLink}
                  variant="outlined"
                  size="small"
                  color="primary"
                  to="/login"
                  sx={{ mt: 0.5, height: 28 }}
                >
                  <Typography>Login</Typography>
                </Button>

                <IconButton
                  color="secondary"
                  onClick={drawerToggler(true)}
                  sx={{
                    "&:hover": {
                      bgcolor:
                        theme.palette.mode === ThemeMode.DARK
                          ? "secondary.lighter"
                          : "secondary.dark",
                    },
                  }}
                >
                  <MenuOutlined style={{ color: "#808286" }} />
                </IconButton>
              </Stack>
              <Drawer
                anchor="right"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "50%",
                    backgroundImage: "none",
                  },
                  "& .MuiListItemIcon-root": { color: "black" },
                }}
              >
                <Box sx={{ mt: 3, pl: 1 }}>
                  <Link component={GatsbyLink} to="/" underline="none">
                    <Logo />
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "auto",
                    "& .MuiListItemIcon-root": {
                      fontSize: "1rem",
                      minWidth: 28,
                    },
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link component={GatsbyLink} underline="none" to="/login">
                      <ListItemButton sx={{ gap: 0.75 }}>
                        <ListItemIcon>
                          <img src={User} alt="Ícone" width={24} height={24} />
                        </ListItemIcon>
                        <ListItemText
                          primary="Login"
                          primaryTypographyProps={{
                            variant: "h6",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link component={GatsbyLink} underline="none" to="/productos">
                      <ListItemButton sx={{ gap: 0.75 }}>
                        <ListItemIcon>
                          <img
                            src={Shopping}
                            alt="Ícone"
                            width={20}
                            height={20}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Productos"
                          primaryTypographyProps={{
                            variant: "h6",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link component={GatsbyLink} underline="none" to="/servicios">
                      <ListItemButton sx={{ gap: 0.75 }}>
                        <ListItemIcon>
                          <img
                            src={Folder}
                            alt="Ícone"
                            width={20}
                            height={20}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Servicios"
                          primaryTypographyProps={{
                            variant: "h6",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link component={GatsbyLink} underline="none" to="/cursos">
                      <ListItemButton sx={{ gap: 0.75 }}>
                        <ListItemIcon>
                          <img src={Phone} alt="Ícone" width={20} height={20} />
                        </ListItemIcon>
                        <ListItemText
                          primary="Cursos"
                          primaryTypographyProps={{
                            variant: "h6",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link component={GatsbyLink} underline="none" to="/contact-us">
                      <ListItemButton sx={{ gap: 0.75 }}>
                        <ListItemIcon>
                          <img src={Book} alt="Ícone" width={20} height={20} />
                        </ListItemIcon>
                        <ListItemText
                          primary="Contacto"
                          primaryTypographyProps={{
                            variant: "h6",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { children: PropTypes.any, window: PropTypes.any };
