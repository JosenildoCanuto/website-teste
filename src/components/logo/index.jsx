import React from "react";

import PropTypes from "prop-types";
import { Link } from "gatsby";
import ButtonBase from "@mui/material/ButtonBase";

import Logo from "./LogoMain";
import LogoIcon from "./LogoIcon";
import { APP_DEFAULT_PATH } from "../../config";

export default function LogoSection({
  reverse = false,
  isIcon = false,
  sx = {},
  to,
}) {
  const destination = to || APP_DEFAULT_PATH;

  const logoContent = isIcon ? <LogoIcon /> : <Logo reverse={reverse} />;

  return (
    <ButtonBase disableRipple sx={sx}>
      {logoContent}
    </ButtonBase>
  );
}

LogoSection.propTypes = {
  reverse: PropTypes.bool,
  isIcon: PropTypes.bool,
  sx: PropTypes.object,
  to: PropTypes.string,
};
