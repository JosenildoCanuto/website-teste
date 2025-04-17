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

import { ThemeMode } from "../../config";

// assets
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import CloseOutlined from "@ant-design/icons/CloseOutlined";
import User from "../../images/drawers/user.svg";
import Shopping from "../../images/drawers/shopping.svg";
import Folder from "../../images/drawers/folder.svg";
import Phone from "../../images/drawers/phone.svg";
import Book from "../../images/drawers/book.svg";

// ==============================|| COMPONENTS - APP BAR ||============================== //

// elevation scroll
function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined,
  });

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

  const items = [
    { to: "/login", label: "Login", icon: User },
    { to: "/productos", label: "Productos", icon: Shopping },
    { to: "/servicios", label: "Servicios", icon: Folder },
    { to: "/cursos", label: "Cursos", icon: Phone },
    { to: "/contact-us", label: "Contacto", icon: Book },
  ];

  const isActive = (to) => {
    return currentPath === to || currentPath.startsWith(to + "/");
  };

  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerToggle, setDrawerToggle] = useState(false);

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
              {items.map(({ to, label }, index) => (
                <Link
                  className="header-link"
                  color={isActive(to) ? "primary" : "text.secondary"}
                  component={GatsbyLink}
                  to={to}
                  underline="none"
                  key={index}
                >
                  <Typography>{label}</Typography>
                </Link>
              ))}
            </Stack>

            {/* Menu mobile + botão login */}
            <Box
              sx={{
                width: "100vw",
                maxWidth: "100%",
                overflowX: "hidden",
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 4,
                    pt: 3,
                  }}
                >
                  <IconButton
                    onClick={drawerToggler(false)}
                    size="small"
                    sx={{
                      color: "text.primary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <CloseOutlined />
                  </IconButton>
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
                    {items.map(({ to, label, icon }, index) => {
                      return (
                        <Link
                          key={index}
                          component={GatsbyLink}
                          underline="none"
                          to={to}
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            paddingLeft={1}
                            paddingRight={1}
                            spacing={1}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 40,
                                borderRadius: "999px",
                                bgcolor: isActive(to)
                                  ? "#1976d2"
                                  : "transparent",
                                transition: "all 0.3s ease",
                              }}
                            />
                            <ListItemButton
                              sx={{
                                gap: 0.5,
                                borderRadius: 2,
                                bgcolor: isActive(to)
                                  ? "rgba(169, 169, 169, 0.2)"
                                  : "transparent",
                              }}
                            >
                              <ListItemIcon>
                                <img
                                  src={icon}
                                  alt="Ícone"
                                  width={20}
                                  height={20}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={label}
                                primaryTypographyProps={{
                                  variant: "h6",
                                  color: "text.primary",
                                }}
                              />
                            </ListItemButton>
                          </Stack>
                        </Link>
                      );
                    })}
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

ElevationScroll.propTypes = {
  children: PropTypes.any,
  window: PropTypes.any,
};
