import { Container, Heading, Text, VStack, Image, Box } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import servicesImage from "../../public/images/services.jpg";
import webDevImage from "../../public/images/new-web-development-v3.jpg";
import onlineStoreImage from "../../public/images/new-online-store.jpg";

const Services = () => {
  return (
    <Container centerContent maxW="container.md" py={12} px={6}>
      <VStack spacing={8}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Heading as="h1" size="2xl" fontFamily="Arial, sans-serif" color="teal.500" mb={4}>
            Our Services
          </Heading>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Image src={servicesImage} alt="Services" borderRadius="md" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Text fontSize="xl" fontFamily="Arial, sans-serif" color="gray.700" textAlign="center" px={4}>
            We offer the following services:
          </Text>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Box textAlign="center">
            <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600" mb={2}>
              - Website Development
            </Text>
            <Image src={webDevImage} alt="New Website Development v3" borderRadius="md" mb={4} />
            <Text fontSize="lg" fontFamily="Arial, sans-serif" color="gray.600" mb={2}>
              - Online Store Creation
            </Text>
            <Image src={onlineStoreImage} alt="New Online Store Creation" borderRadius="md" />
          </Box>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Services;