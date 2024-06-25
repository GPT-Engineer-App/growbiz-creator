import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const FuturePlans = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Future Plans</Heading>
        <Text fontSize="lg">In the future, we plan to expand our services to include:</Text>
        <Text>- App Development</Text>
        <Text>- Business Optimization</Text>
        <Text>- Consultancy</Text>
      </VStack>
    </Container>
  );
};

export default FuturePlans;