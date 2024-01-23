import { Box, Grid, Heading } from "@chakra-ui/react";
import * as react from "react";
import HeadingBox from "../../../components/custom_elements/HeadingBox";

const Footer = () => {
  return (
    <>
      <Grid gridTemplateColumns={"repeat(2,1fr)"}>
        <Box>
          <Heading mb={"44px"} fontSize={"32px"} color={"#fde300"}>
            Contact Us
          </Heading>
          <Box color={"#fff"}>Social Medias</Box>
          <Box color={"#fff"}>United College, Kumaripati</Box>
        </Box>
        <Box justifySelf={"end"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.289701675541!2d85.31812089472645!3d27.67016792877024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199695c982a1%3A0x2edc589e898608da!2sUnited%20College!5e0!3m2!1sen!2snp!4v1706025621511!5m2!1sen!2snp"
            width="221"
            height="226"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Grid>
    </>
  );
};

export default Footer;
