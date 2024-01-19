import { Box, Image } from "@chakra-ui/react";
import * as react from "react";

const IntroBox = ({
  fontSize,
  fontWeight,
  textAlign,
  color,
  m,
  mt,
  mb,
  ms,
  me,
  pt,
  pb,
  ps,
  pe,
  p,
  children,
}) => {
  return (
    <>
      <Box
        backgroundImage={"url('/assets/images/homepage/introBox.png')"}
        backgroundRepeat={"no-repeat"}
        padding={"51px"}
        fontSize={fontSize}
        m={m}
        mt={mt}
        mb={mb}
        ms={ms}
        me={me}
        fontWeight={fontWeight}
        w={"623px"}
        h={"400px"}
        pt={pt}
        pb={pb}
        ps={ps}
        pe={pe}
        p={p}
        color={color}
        textAlign={textAlign}
      >
        {children}
      </Box>
    </>
  );
};

export default IntroBox;
