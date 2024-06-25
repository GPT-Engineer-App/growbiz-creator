import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Founder = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">About the Founder</Heading>
        <Text fontSize="lg">Our founder has 2 years of experience in data analysis and operational excellence.</Text>
        <Text>With a passion for helping small businesses grow and develop, our founder is dedicated to providing top-notch services.</Text>
      </VStack>
    </Container>
  );
};

export default Founder;