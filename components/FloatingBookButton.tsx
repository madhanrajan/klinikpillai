import { Box, Button, Icon, Tooltip, Text, HStack } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

const FloatingBookButton = () => {
  return (
    <Box
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex={999}
    >
      <Tooltip label="Book an appointment" placement="left" hasArrow>
        <Button
        as="a"
        href=""
        onClick={(e) => {
          e.preventDefault();
          // @ts-ignore
          Calendly.initPopupWidget({url: 'https://calendly.com/klinikpillai/book-an-appointment'});
          return false;
        }}
        colorScheme="teal"
        size="lg"
        height="60px"
        width={{ base: "60px", md: "auto" }}
        px={{ base: 0, md: 6 }}
        borderRadius="full"
        boxShadow="0 4px 12px rgba(0,0,0,0.15)"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
        }}
        _active={{
          transform: 'translateY(0)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
        transition="all 0.2s"
      >
        <HStack spacing={2}>
          <Icon as={CalendarIcon} w={6} h={6} />
          <Text display={{ base: "none", md: "block" }}>Book Appointment</Text>
        </HStack>
        </Button>
      </Tooltip>
    </Box>
  );
};

export default FloatingBookButton;
