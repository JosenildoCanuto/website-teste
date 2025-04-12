import React from "react";

import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MainCard from "../../MainCard";

import StandardLogo from "../../../images/products/price/Standard";
import StandardPlusLogo from "../../../images/products/price/StandardPlus";
import LogoPlus from "../../../images/products/price/LogoPlus";

import CheckOutlined from "@ant-design/icons/CheckOutlined";

// plan list
const plans = [
  {
    active: false,
    icon: <StandardLogo />,
    title: "Documentos",
    description:
      "Papel Cero es el objetivo, pero alcanzarlo requiere pasos clave. Imagina un sistema que, basado en buenas prácticas del mercado, no solo gestiona documentos, sino que guía cada proceso paso a paso, llevando al cliente de la mano.",
    price: 69,
    permission: [0, 2],
  },
  {
    active: true,
    icon: <StandardPlusLogo />,
    title: "Gestión de Riesgo",
    description:
      "Create one end product for a client, transfer that end product to your client, charge them for your services. The license is then transferred to the client.",
    price: 129,
    permission: [0, 2, 4, 6],
  },
  {
    active: false,
    icon: <LogoPlus isIcon sx={{ width: 36, height: 36 }} />,
    title: "Validación",
    description:
      "Create one end product for a client, transfer that end product to your client, charge them for your services. The license is then transferred to the client.",
    price: 599,
    permission: [0, 2, 4, 6],
  },
  {
    active: false,
    icon: <LogoPlus isIcon sx={{ width: 36, height: 36 }} />,
    title: "Dashboard",
    description:
      "Create one end product for a client, transfer that end product to your client, charge them for your services. The license is then transferred to the client.",
    price: 599,
    permission: [0, 2, 4, 6],
  },
];

const planList = [
  "Tipos de documentos GMP", // 0
  "Autenticidad de Versión", // 3
  "Gestión de aprobación", // 1
  "Gestión de Mudanças", // 4
  "Generación automatizada", // 2
  "Relación entre documentos", // 5
  "Firma Digital", // 6
  "Autenticidad de Versión", // 7
  "Gestión de Mudanças", // 8
  "Relación entre documentos", // 9
];

export default function ListProducts() {
  const theme = useTheme();

  const priceListDisable = {
    opacity: 0.4,
    "& >div> svg": {
      fill: theme.palette.secondary.light,
    },
  };

  return (
    <>
      <Box
        sx={{
          pl: { md: "9rem", xs: "1rem" },
          pr: { md: "9rem", xs: "1rem" },
          pb: "6rem",
        }}
      >
        <Grid
          item
          spacing={3}
          xs={12}
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={9} key={index}>
              <MainCard
                sx={{ pt: 1.75, border: "1px solid", borderColor: "#e6ebf1" }}
              >
                <Grid container spacing={3} sx={{ display: "flex" }}>
                  <Grid item xs={12} sm={4}>
                    <Grid item xs={12} sx={{ paddingLeft: 2 }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        textAlign="center"
                        alignItems="center"
                      >
                        <Box height={36} sx={{ "& svg": { height: 1 } }}>
                          {plan.icon}
                        </Box>
                        <Typography sx={{ fontSize: "20px" }}>
                          {plan.title}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={11} sx={{ mt: 3, paddingLeft: { md: 2 } }}>
                      <Typography color="text.secondary" variant="body2">
                        {plan.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <List
                      sx={{
                        m: 0,
                        p: 2,
                        columnCount: { xs: 1, sm: 2, lg: 3 },
                        columnGap: 4,
                        height: "100%",
                        "& > li": {
                          px: 0,
                          py: 0.625,
                          "& svg": { fill: theme.palette.success.dark },
                          display: "flex",
                          minWidth: 0,
                          flex: "1 1 auto", //
                        },
                      }}
                      component="div"
                    >
                      {planList.map((list, i) => (
                        <ListItem
                          key={i}
                          sx={
                            !plan.permission.includes(i) ? priceListDisable : {}
                          }
                          divider
                        >
                          <ListItemIcon>
                            <CheckOutlined />
                          </ListItemIcon>
                          <ListItemText primary={list} sx={{ '& .MuiTypography-root': { fontSize: '14px' } }} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      ;
    </>
  );
}
