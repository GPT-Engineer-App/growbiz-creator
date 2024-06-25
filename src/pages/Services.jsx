import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import servicesImage from "../../public/images/services.jpg";

const Services = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="xl">Our Services</Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={servicesImage} alt="Services" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="lg">We offer the following services:</Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Text>- Website Development</Text>
          <Text>- Online Store Creation</Text>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Services;