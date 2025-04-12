import React from "react";

import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';

// project-import
import { ThemeMode } from '../../config';

import logoDark from '../../images/logo/logo-dark.svg';
// import logo from 'assets/images//logo/logo-branca.svg';

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain({ reverse }) {
  const theme = useTheme();
  return (
    <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logoDark} alt="Mantis" width="100" />
  );
}

LogoMain.propTypes = { reverse: PropTypes.bool };
