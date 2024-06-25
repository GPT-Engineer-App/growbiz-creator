import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import pricingImage from "../../public/images/pricing.jpg";

const Pricing = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="xl">Pricing</Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={pricingImage} alt="Pricing" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="lg">We offer the following pricing for our services:</Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Text>- Website development: R25 000</Text>
          <Text>- Online store: R50 000</Text>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Pricing;