import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import futurePlansImage from "../../public/images/future-plans.jpg";

const FuturePlans = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="xl">Future Plans</Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={futurePlansImage} alt="Future Plans" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="lg">In the future, we plan to expand our services to include:</Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Text>- App Development</Text>
          <Text>- Business Optimization</Text>
          <Text>- Consultancy</Text>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default FuturePlans;