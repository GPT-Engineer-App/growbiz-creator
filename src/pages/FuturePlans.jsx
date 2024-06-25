import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import futurePlansImage from "../../public/images/future-plans.jpg";

const FuturePlans = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Future Plans</Heading>
        <Image src={futurePlansImage} alt="Future Plans" />
        <Text fontSize="lg">In the future, we plan to expand our services to include:</Text>
        <Text>- App Development</Text>
        <Text>- Business Optimization</Text>
        <Text>- Consultancy</Text>
      </VStack>
    </Container>
  );
};

export default FuturePlans;