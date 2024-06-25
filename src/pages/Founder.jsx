import { Container, Heading, Text, VStack, Image, Box } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import founderImage from "../../public/images/founder.jpg";
import additionalImage1 from "../../public/images/additional1.jpg";
import additionalImage2 from "../../public/images/additional2.jpg";

const Founder = () => {
  return (
    <Container centerContent maxW="container.md" py={12} px={6}>
      <VStack spacing={8}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="2xl" fontFamily="Arial, sans-serif" color="teal.500" mb={4}>
            About the Founder
          </Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={founderImage} alt="Founder" borderRadius="md" boxShadow="lg" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="xl" fontFamily="Arial, sans-serif" color="gray.700" textAlign="center" px={4}>
            Our founder, Abdullah Parker, has 2 years of experience in data analysis and operational excellence.
          </Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600" textAlign="center" px={4}>
            With a passion for helping small businesses grow and develop, our founder is dedicated to providing top-notch services.
          </Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
          <Box>
            <Image src={additionalImage1} alt="Additional Image 1" borderRadius="md" boxShadow="lg" mb={4} />
            <Image src={additionalImage2} alt="Additional Image 2" borderRadius="md" boxShadow="lg" />
          </Box>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Founder;