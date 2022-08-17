import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Max_Ezaki</title>
      </Head>
      <Header />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
