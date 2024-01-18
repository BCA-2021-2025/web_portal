import * as react from "react";

import { Box, Stack, Heading, Container } from "@chakra-ui/react";
import Hero from "../components/Hero.component";
import TestimonialBox from "../../../components/custom_elements/TestimonialBox";

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
      <Container maxW={"6xl"} zIndex={1} position={"relative"}>
        <Hero />
        <TestimonialBox />
      </Container>
    </>
  );
};
export default Home;
