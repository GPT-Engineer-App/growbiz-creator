import { Box, Flex, Link, Image } from "@chakra-ui/react";
import logo from "../../public/images/logo.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/">
            <Image src={logo} alt="AP Developers Logo" height="40px" />
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/services" color="white" mx={2} _hover={{ color: "#ffcc00" }}>
            Services
          </Link>
          <Link as={RouterLink} to="/founder" color="white" mx={2} _hover={{ color: "#ffcc00" }}>
            Founder
          </Link>
          <Link as={RouterLink} to="/future-plans" color="white" mx={2} _hover={{ color: "#ffcc00" }}>
            Future Plans
          </Link>
          <Link as={RouterLink} to="/pricing" color="white" mx={2} _hover={{ color: "#ffcc00" }}>
            Pricing
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;