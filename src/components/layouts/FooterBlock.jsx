import React from "react";

import PropTypes from 'prop-types';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// project import
import AnimateButton from '../@extended/AnimateButton';

import useConfig from '../../hooks/useConfig';
import { ThemeDirection, ThemeMode } from '../../config';
import { getImageUrl, ImagePath } from '../../utils/getImageUrl';

// assets
import LinkedinFilled from '@ant-design/icons/LinkedinFilled';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

export default function FooterBlock({ isFull }) {
  const theme = useTheme();
  const { mode } = useConfig();
  const textColor = mode === ThemeMode.DARK ? 'text.primary' : 'background.paper';

  const linkSX = {
    color: 'common.white',
    fontSize: '1.1rem',
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      {isFull && (
        <Box
          sx={{
            position: 'relative',
            bgcolor: '#1F1F1F',
            zIndex: 1,
            mt: { xs: 0, md: 13.75 },
            pt: { xs: 8, sm: 7.5, md: 10 },
            pb: { xs: 2.5, md: 10 },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '80%',
              bottom: 0,
              left: 0,
              background:
                theme.direction === ThemeDirection.RTL
                  ? `linear-gradient(transparent 100%, rgb(31, 31, 31) 70%)`
                  : `linear-gradient(180deg, transparent 0%, ${theme.palette.grey.A700} 70%)`
            }
          }}
        >
          <CardMedia
            component="img"
            image={getImageUrl(`MantisFooter.png`, ImagePath.LANDING)}
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '80%',
              maxWidth: 800,
              position: 'absolute',
              top: '-28%',
              right: 0
              // ...(theme.direction === ThemeDirection.RTL && { transform: 'scaleX(-1)', float: 'none' })
            }}
          />
          <Container>
            <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
              <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={2} sx={{ [theme.breakpoints.down('md')]: { pr: 0, textAlign: 'center' } }}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
                      WISE QMS
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 550 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                    >
                      <Typography variant="h2" sx={{ color: 'common.white', fontWeight: 700 }}>
                        Solicite una Demostración
                      </Typography>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography variant="body1" sx={{ color: 'common.white' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ my: 2 }}>
                    <Box sx={{ display: 'inline-block' }}>
                      <AnimateButton>
                        <Button
                          size="large"
                          variant="contained"
                          component={Link}
                          href="https://codedthemes.gitbook.io/mantis/roadmap"
                          target="_blank"
                        >
                          Contacto
                        </Button>
                      </AnimateButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      <Box sx={{ pt: isFull ? 0 : { md: 10, xs: 8 }, pb: 10, bgcolor: '#1F1F1F' }}>
        <Container>
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={{ md: 5, xs: 2 }} sx={{ pt: 0 }}>
                  <Grid item xs={12} sx={{ paddingTop: 0 }}>
                    <Typography variant="body2" color={textColor} sx={{ fontWeight: 500 }}>
                      About us
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontWeight: 400, color: 'common.white' }}>
                      Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 400, color: 'common.white', mt: 2 }}>
                      contacto@dicawise.com
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 5, md: 4 }}>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography variant="body2" color={textColor} sx={{ fontWeight: 500 }}>
                      Produtos
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="https://blog.mantisdashboard.io/" underline="none">
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Purchase Mantis React</Typography>
                      </FooterLink>
                      <FooterLink href="https://codedthemes.gitbook.io/mantis/" underline="none">
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Portfolio (Store link)</Typography>
                      </FooterLink>
                      <FooterLink href="https://codedthemes.gitbook.io/mantis/changelog" underline="none">
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Blog</Typography>
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography variant="body2" color={textColor} sx={{ fontWeight: 500 }}>
                      Serviços
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="https://mui.com/store/license/" underline="none">
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Documentation</Typography>
                      </FooterLink>
                      <FooterLink href="https://mui.com/store/customer-refund-policy/" underline="none">
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Github</Typography>
                      </FooterLink>
                      <FooterLink
                        href="https://support.mui.com/hc/en-us/sections/360002564979-For-customers"
                        underline="none"
                      >
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Change Log</Typography>
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography variant="body2" color={textColor} sx={{ fontWeight: 500 }}>
                      Cursos
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="http://mui.com/store/previews/berry-react-material-admin/" underline="none">
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Berry React</Typography>
                      </FooterLink>
                      <FooterLink href="https://mui.com/store/previews/berry-react-material-admin-free/" underline="none">
                        <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.6 }}>Berry Free React</Typography>
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{ borderColor: '#1F1F1F' }} />
      <Box sx={{ py: 1.5, bgcolor: "#1F1F1F" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography variant="subtitle2" sx={{ color: 'common.white', opacity: 0.6 }}>
                © 2025 Dica Wise Consultoría S.A. Todos los derechos reservados
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Link href="https://in.linkedin.com/company/codedthemes" underline="none" sx={linkSX}>
                    <LinkedinFilled />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

FooterBlock.propTypes = { isFull: PropTypes.bool };
