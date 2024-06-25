import { Container, Heading, Text, VStack, Image, Box } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import pricingImage from "../../public/images/pricing.jpg";
import additionalImage1 from "../../public/images/additional1.jpg";
import additionalImage2 from "../../public/images/additional2.jpg";

const Pricing = () => {
  return (
    <Container centerContent maxW="container.md" py={12} px={6}>
      <VStack spacing={8}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="2xl" fontFamily="Arial, sans-serif" color="teal.500" mb={4}>
            Pricing
          </Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={pricingImage} alt="Pricing" borderRadius="md" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="xl" fontFamily="Arial, sans-serif" color="gray.700" textAlign="center" px={4}>
            We offer the following pricing for our services:
          </Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Box textAlign="left" px={4}>
            <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600" mb={2}>
              - Website development: R25 000
            </Text>
            <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600">
              - Online store: R50 000
            </Text>
          </Box>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
          <Image src={additionalImage1} alt="Additional Service 1" borderRadius="md" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
          <Image src={additionalImage2} alt="Additional Service 2" borderRadius="md" />
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Pricing;