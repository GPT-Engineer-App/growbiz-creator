import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Our Services</Heading>
        <Text fontSize="lg">We offer the following services:</Text>
        <Text>- Website Development</Text>
        <Text>- Online Store Creation</Text>
      </VStack>
    </Container>
  );
};

export default Services;