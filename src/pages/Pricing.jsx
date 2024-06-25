import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import pricingImage from "../../public/images/pricing.jpg";

const Pricing = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Pricing</Heading>
        <Image src={pricingImage} alt="Pricing" />
        <Text fontSize="lg">We offer the following pricing for our services:</Text>
        <Text>- Website development: R25 000</Text>
        <Text>- Online store: R50 000</Text>
      </VStack>
    </Container>
  );
};

export default Pricing;