import React from "react";

import { Box } from '@mui/material';
import LogoPlus from '../../../images/products/Logo.svg';

const LogoPlusIcon = ({ sx }) => <Box component="img" src={LogoPlus} sx={{ width: 36, height: 36, ...sx }} />;

export default LogoPlusIcon;
