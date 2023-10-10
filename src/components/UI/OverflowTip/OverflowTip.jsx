import { useRef, useEffect, useState } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import variables from "../../../styles/variables.scss";
import "./overflowTip.scss";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip
    leaveDelay={0}
    followCursor
    classes={{ popper: className }}
    {...props}
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    wordBreak: "break-all",
    fontSize: variables.fontSizeMain,
    borderRadius: "4px",
    padding: "3px 16px",
  },
}));

const OverflowTip = ({ name, link, style, ...rest }) => {
  const textElementRef = useRef(null);
  const [hoverStatus, setHover] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const compareSize = () => {
    const compare =
      textElementRef.current.scrollWidth > textElementRef.current.clientWidth;
    setHover(compare);
  };

  useEffect(() => {
    compareSize();
  }, [name]);

  useEffect(() => {
    window.addEventListener("resize", compareSize);
    return () => {
      window.removeEventListener("resize", compareSize);
    };
  }, []);

  const elStyle = {
    textDecoration: "none",
    color: "currentColor",
    display: "block",
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    ...style,
  };

  const Element = link ? (
    <Link to={link} ref={textElementRef} style={elStyle}>
      {name}
    </Link>
  ) : (
    <Box ref={textElementRef} style={elStyle}>
      {name}
    </Box>
  );

  return (
    <CustomTooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={name}
      className="tooltip-topmargin"
      disableHoverListener={!hoverStatus}
      {...rest}>
      {Element}
    </CustomTooltip>
  );
};

export default OverflowTip;
