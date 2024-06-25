import { Container, Text, VStack, Heading, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Business</Heading>
        <Text fontSize="lg">We develop websites and online stores for small local businesses.</Text>
        <Box mt={8}>
          <Flex direction="column" align="center">
            <Link to="/services">Our Services</Link>
            <Link to="/founder">About the Founder</Link>
            <Link to="/future-plans">Future Plans</Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;