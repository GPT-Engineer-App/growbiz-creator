import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import servicesImage from "../../public/images/services.jpg";

const Services = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Our Services</Heading>
        <Image src={servicesImage} alt="Services" />
        <Text fontSize="lg">We offer the following services:</Text>
        <Text>- Website Development</Text>
        <Text>- Online Store Creation</Text>
      </VStack>
    </Container>
  );
};

export default Services;