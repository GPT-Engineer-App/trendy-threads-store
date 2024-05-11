import { Box, Button, Container, Flex, Grid, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation Bar */}
        <Box as="nav" bg="white" p={4} position="sticky" top={0} zIndex={1}>
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">
              TrendThreads
            </Text>
            <Flex gap={4}>
              <Link href="#" p={2}>
                Home
              </Link>
              <Link href="#" p={2}>
                Men’s Clothing
              </Link>
              <Link href="#" p={2}>
                Women’s Clothing
              </Link>
              <Link href="#" p={2}>
                Accessories
              </Link>
              <Link href="#" p={2}>
                About Us
              </Link>
              <Link href="#" p={2}>
                Contact
              </Link>
            </Flex>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Box bgImage="https://images.unsplash.com/3/www.madebyvadim.com.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaGVybyUyMGltYWdlfGVufDB8fHx8MTcxNTQ0NjU2NXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" h="70vh">
          <VStack justify="center" align="left" h="full" p={8}>
            <Heading as="h1" size="2xl" color="white" textShadow="1px 1px 2px black">
              New Arrivals Are Here
            </Heading>
            <Button colorScheme="pink" rightIcon={<FaArrowRight />}>
              Shop Now
            </Button>
          </VStack>
        </Box>

        {/* Category Preview Tiles */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={6}>
          <Box bgImage="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY2xvdGhpbmd8ZW58MHx8fHwxNzE1NDQ2NTY1fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold" color="white" textShadow="1px 1px 2px black">
              Men’s Clothing
            </Text>
          </Box>
          <Box bgImage="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBjbG90aGluZ3xlbnwwfHx8fDE3MTU0NDY1NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold" color="white" textShadow="1px 1px 2px black">
              Women’s Clothing
            </Text>
          </Box>
          <Box bgImage="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY2Nlc3Nvcmllc3xlbnwwfHx8fDE3MTU0NDY1NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold" color="white" textShadow="1px 1px 2px black">
              Accessories
            </Text>
          </Box>
        </Grid>

        {/* Featured Collections Section */}
        <VStack spacing={4} p={6}>
          <Heading as="h2" size="lg">
            Featured Collections
          </Heading>
          <Flex overflowX="scroll" gap={4}>
            <Box w="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaXRlbSUyMDF8ZW58MHx8fHwxNzE1NDQ2NTY3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
              <Text mt={2} fontSize="md" fontWeight="bold">
                $29.99
              </Text>
              <Button colorScheme="teal" size="sm">
                Add to Cart
              </Button>
            </Box>
            <Box w="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaXRlbSUyMDJ8ZW58MHx8fHwxNzE1NDQ2NTY3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
              <Text mt={2} fontSize="md" fontWeight="bold">
                $49.99
              </Text>
              <Button colorScheme="teal" size="sm">
                Add to Cart
              </Button>
            </Box>
          </Flex>
        </VStack>

        {/* Footer */}
        <Box bg="gray.200" p={6}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Company
              </Text>
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
            </VStack>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Help
              </Text>
              <Link href="#">FAQs</Link>
              <Link href="#">Contact Us</Link>
            </VStack>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Follow Us
              </Text>
              <Flex gap={2}>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </Flex>
            </VStack>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Newsletter
              </Text>
              <Text>Sign up for updates and promotions:</Text>
              <Button colorScheme="blue">Subscribe</Button>
            </VStack>
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
