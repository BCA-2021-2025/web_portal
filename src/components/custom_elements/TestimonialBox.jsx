import { Box, Image } from "@chakra-ui/react";
import * as react from "react";

const TestimonialBox = ({
  fontSize,
  color,
  m,
  mt,
  mb,
  ms,
  me,
  fontWeight,
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
        backgroundImage={"url('/assets/images/homepage/testimonialBox.png')"}
        backgroundRepeat={"no-repeat"}
        padding={"35px"}
        fontSize={fontSize}
        m={m}
        mt={mt}
        mb={mb}
        ms={ms}
        me={me}
        fontWeight={fontWeight}
        w={"509px"}
        pt={pt}
        pb={pb}
        ps={ps}
        pe={pe}
        p={p}
      >
        {children}
      </Box>
    </>
  );
};

export default TestimonialBox;
