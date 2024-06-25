import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import futurePlansImage from "../../public/images/future-plans.jpg";
import appDevelopmentImage from "../../public/images/new-app-development.jpg";
import businessOptimizationImage from "../../public/images/business-optimization.jpg";
import consultancyImage from "../../public/images/consultancy.jpg";

const FuturePlans = () => {
  return (
    <Container centerContent maxW="container.md" py={12} px={6}>
      <VStack spacing={8}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="2xl" fontFamily="Arial, sans-serif" color="teal.500" mb={4}>
            Future Plans
          </Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={futurePlansImage} alt="Future Plans" borderRadius="md" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="xl" fontFamily="Arial, sans-serif" color="gray.700" textAlign="center" px={4}>
            In the future, we plan to expand our services to include:
          </Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <VStack spacing={4}>
            <Image src={appDevelopmentImage} alt="New App Development" borderRadius="md" />
            <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600">- App Development</Text>
            <Image src={businessOptimizationImage} alt="Business Optimization" borderRadius="md" />
            <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600">- Business Optimization</Text>
            <Image src={consultancyImage} alt="Consultancy" borderRadius="md" />
            <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600">- Consultancy</Text>
          </VStack>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default FuturePlans;