import { Container, Box, Heading, Text, Button, Flex } from '@chakra-ui/react';

const BookAppointment = () => {
  return (
    <Container maxW="full" p={{ base: 5, md: 10 }}>
      
      <Heading as="h2" size="lg" mb="2" fontWeight="bold" textAlign="left">
        Schedule an Appointment
      </Heading>
      <Text fontSize="md" color="teal.500" mb="6" textAlign="left">
        Your health is our priority. Book a convenient time slot with our doctors.
      </Text>
      
      <Flex 
        direction="column" 
        align="center"
        justify="center"
        width="100%" 
        maxW="1000px" 
        mx="auto"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Text fontSize="lg" mb={6}>
          Click the button below to schedule your appointment with our healthcare professionals.
        </Text>
        
        {/* Calendly link widget */}
        <Button 
          colorScheme="teal" 
          size="lg"
          as="a"
          href="" 
          onClick={(e) => {
            e.preventDefault();
            // @ts-ignore
            Calendly.initPopupWidget({url: 'https://calendly.com/klinikpillai/book-an-appointment'});
            return false;
          }}
        >
          Book an appointment
        </Button>
      </Flex>
    </Container>
  );
};

export default BookAppointment;
