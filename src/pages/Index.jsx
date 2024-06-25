import { Container, Text, VStack, Heading, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="2xl">Welcome to AP Developers</Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Text fontSize="lg">We develop websites and online stores for small local businesses.</Text>
        </motion.div>
        <Box mt={8}>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img src="/images/slide1.jpg" alt="Slide 1" />
              <p className="legend">Our Services</p>
            </div>
            <div>
              <img src="/images/slide2.jpg" alt="Slide 2" />
              <p className="legend">About the Founder</p>
            </div>
            <div>
              <img src="/images/slide3.jpg" alt="Slide 3" />
              <p className="legend">Future Plans</p>
            </div>
          </Carousel>
          <Flex direction="column" align="center" mt={8}>
            <Link to="/services">Our Services</Link>
            <Link to="/founder">About the Founder</Link>
            <Link to="/future-plans">Future Plans</Link>
            <Link to="/pricing">Pricing</Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;