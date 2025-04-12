import React from "react";

// material-ui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// project imports
import ContactForm from "../components/sections/contact-us/ContactForm";
import ContactHeader from "../components/sections/contact-us/ContactHeader";
import Layout from "../components/layouts/index";

// ==============================|| CONTACT US - MAIN ||============================== //

export default function contactUS() {
  return (
    <Layout>
      <Grid
        container
        spacing={12}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 12 }}
      >
        <Grid item xs={12} md={12}>
          <ContactHeader />
        </Grid>
        <Grid item xs={12} sm={10} lg={9}>
          <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
            <ContactForm />
          </Container>
        </Grid>
      </Grid>
    </Layout>
  );
}
