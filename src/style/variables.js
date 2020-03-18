export const ptsanscaptionRegular = `'PT San Caption', sans-serif`;
export const ptsanscaptionBold = `'PT San Caption Bold', sans-serif`;

const redColor = `#E73737`;
const darkBlueColor = `#0E1B3B`;
const lightBlueColor = `#667496`;
const lightGrayColor = `#F6F6FA`;
const greenColor = `#35C24D`;

const whiteColor = `#FFFFFF`;

export const colors = {
  redColor,
  darkBlueColor,
  lightBlueColor,
  lightGrayColor,
  greenColor,
  whiteColor,
};

const xlgWidth = `1820`;
const lgWidth = `1420`;
const mdWidth = `1240`;
const smWidth = `1000`;
const xsWidth = `425`;
const tabletWidth = `768`;

export const sizes = {
  xlg: `(min-width: ${xlgWidth}px)`,
  lg: `(min-width: ${lgWidth}px) and (max-width: ${xlgWidth - 1}px)`,
  md: `(min-width: ${mdWidth}px) and (max-width: ${lgWidth - 1}px)`,
  sm: `(min-width: ${smWidth}px) and (max-width: ${mdWidth - 1}px)`,
  lg_xlg: `(min-width: ${lgWidth}px)`,
  md_xlg: `(min-width: ${mdWidth}px)`,
  md_lg: `(min-width: ${mdWidth}px) and (max-width: ${xlgWidth - 1}px)`,
  sm_md: `(min-width: ${smWidth}px) and (max-width: ${lgWidth - 1}px)`,
  sm_lg: `(min-width: ${smWidth}px) and (max-width: ${xlgWidth - 1}px)`,
  desktop: `(min-width: ${smWidth}px)`,
  tablet: `(min-width: ${tabletWidth}px) and (max-width: ${smWidth - 1}px)`,
  tablet_desktop: `(min-width: ${tabletWidth}px)`,
  tablet_lg: `(min-width: ${tabletWidth}px) and (max-width: ${xlgWidth - 1}px)`,
  tablet_md: `(min-width: ${tabletWidth}px) and (max-width: ${lgWidth - 1}px)`,
  tablet_sm: `(min-width: ${tabletWidth}px) and (max-width: ${mdWidth - 1}px)`,
  phone: `(max-width: ${tabletWidth - 1}px)`,
  phone_tablet: `(max-width: ${smWidth - 1}px)`,
  phone_md: `(max-width: ${lgWidth - 1}px)`,
  phone_sm: `(max-width: ${mdWidth - 1}px)`,
  phone_xs: `(max-width: ${xsWidth - 1}px)`,
  phone_lg: `(max-width: ${xlgWidth - 1}px)`,
};

const x = window.matchMedia(sizes.phone);
export const mobile = x.matches;
