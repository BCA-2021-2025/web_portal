import * as react from "react";

import { Box, Stack, Heading, Container } from "@chakra-ui/react";
import Hero from "../components/Hero.component";
import TestimonialBox from "../../../components/custom_elements/TestimonialBox";
import AboutUs from "../components/AboutUs.component";
import Testimonials from "../components/Testimonials.component";

const Home = () => {
  return (
    <>
      <Box
        backgroundImage={"url('/assets/images/homepage/bgCode.png')"}
        width={"-webkit-fill-available"}
        height={"832px"}
        position={"absolute"}
        top={"0"}
      ></Box>
      <Container maxW={"6xl"} zIndex={1} position={"relative"} mb={"118px"}>
        <Hero />
      </Container>
      <Container maxW={"6xl"} mb={"118px"}>
        <AboutUs />
      </Container>
      <Container maxW={"6xl"} mb={"118px"}>
        <Testimonials />
      </Container>
      <TestimonialBox
        color={"#fff"}
        fontSize={"24px"}
        textAlign={"center"}
        mt={"400px"}
      >
        Huge shoutout to United IT Club! Navigating their user-friendly site is
        a joy. The constant stream of up-to-date content keeps me in the tech
        loop. Cheers to a brilliant platform!
      </TestimonialBox>
    </>
  );
};
export default Home;
