import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="lg">
            Our Business
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/services" color="white" mx={2}>
            Services
          </Link>
          <Link as={RouterLink} to="/founder" color="white" mx={2}>
            Founder
          </Link>
          <Link as={RouterLink} to="/future-plans" color="white" mx={2}>
            Future Plans
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;