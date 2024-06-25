import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import founderImage from "../../public/images/founder.jpg";

const Founder = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="xl">About the Founder</Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={founderImage} alt="Founder" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="lg">Our founder, Abdullah Parker, has 2 years of experience in data analysis and operational excellence.</Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Text>With a passion for helping small businesses grow and develop, our founder is dedicated to providing top-notch services.</Text>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Founder;