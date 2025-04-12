import React from "react";

import { useTheme } from '@mui/material/styles';
import { Button, Container, Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardCarrossel from './CardCarrossel';
import { useState } from 'react';

export default function Results() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isTablet ? 2 : 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: true,
    cssEase: 'linear',
    afterChange: (index) => setCurrentSlide(index)
  };

  const totalIndicators = isTablet ? 3 : 4;

  const carrosselData = [
    {
      title: 'Wellington Foods',
      percentage: '100%',
      description: 'Faster Review and Release'
    },
    {
      title: 'Outra Empresa',
      percentage: '75%',
      description: 'Improved Efficiency'
    },
    {
      title: 'Terceira Empresa',
      percentage: '90%',
      description: 'Enhanced Productivity'
    },
    {
      title: 'Quarta Empresa',
      percentage: '50%',
      description: 'Streamlined Operations'
    }
  ];

  return (
    <Container
      disableGutters
      sx={{
        display: { md: 'flex' },
        alignItems: 'flex-start',
        justifyContent: { xs: 'center', md: 'flex-start' },
        height: '100vh',
        margin: 0,
        ml: 'auto',
        mr: 'auto',
        mt: { xs: 6, md: 13.75 },
        mb: { xs: 16, sm: 4, md: 0 },
        width: '100%'
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center' },
          width: '100%'
        }}
      >
        <Grid item xs={10} sm={10}>
          <Typography
            variant="h1"
            color="black"
            sx={{
              paddingLeft: '0px',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              lineHeight: 1,
              fontWeight: 900
            }}
          >
            <Box component="span" sx={{ color: 'primary.main' }}>
              Results
            </Box>{' '}
            You Can Measure
          </Typography>
        </Grid>

        <Grid item xs={10} sm={10}>
          <Typography variant="h6" color="black" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, fontWeight: 400, lineHeight: 1.4 }}>
            Our customers experience incredible value when moving their quality and manufacturing processes to the MasterControl platform.
            Read their stories and see the transformative value created by these major players in the pharma, med device, and nutraceutical
            industries.
          </Typography>
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '1.4rem' }, lineHeight: '2rem', p: '12px', borderRadius: 0, my: 3 }}
          >
            View All Case Studies
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 25, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {isDesktop ? (
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                flexWrap: 'wrap',
                gap: '15px',
                mt: 0,
                width: '100%'
              }}
            >
              {carrosselData.map((item, index) => (
                <CardCarrossel key={index} title={item.title} percentage={item.percentage} description={item.description} />
              ))}
            </Grid>
          ) : (
            <>
              <Slider {...settings}>
                {carrosselData.map((item, index) => (
                  <Box key={index} sx={{ padding: '0 10px' }}>
                    <CardCarrossel title={item.title} percentage={item.percentage} description={item.description} />
                  </Box>
                ))}
              </Slider>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '10px',
                  mt: 2
                }}
              >
                {Array.from({ length: totalIndicators }, (_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '20px',
                      height: '4px',
                      backgroundColor: currentSlide === index ? 'primary.main' : 'grey.400',
                      borderRadius: '2px',
                      transition: 'background-color 0.3s'
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </motion.div>
      </Grid>
    </Container>
  );
}
