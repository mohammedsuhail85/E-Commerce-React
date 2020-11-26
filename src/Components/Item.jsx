import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Badge,
  StarIcon,
  Image,
} from '@chakra-ui/react';
import Route from 'react-router';
import NotAvailable from './NotAvailable'

export default function ItemList(props) {
  const { property } = props;

  if (property == null) {
    <NotAvailable />
  } else {
    return (
      <div>
        <Box textAlign="center" fontSize="xl">
          {/* <Grid minH="100vh" p={3} bg="green"> */}
          {/* <VStack spacing={8}> */}

          <Box
            position="relative"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
          </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
          </Box>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                <Link href={"/users/profile/" + property.id} breakout="true">
                  {property.title}
                </Link>""
            </Box>
              <Box>
                {property.formattedPrice}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
          </Box>
              </Box>
              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
          </Box>
              </Box>
            </Box>
          </Box>
          {/* </VStack> */}
          {/* </Grid> */}
        </Box>
      </div>
    );
  }
}
