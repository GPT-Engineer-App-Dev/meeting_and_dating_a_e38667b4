import React, { useState } from "react";
import { Box, Button, Heading, Text, VStack, HStack, Image, Select, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
  const [eventType, setEventType] = useState("");
  const [participants, setParticipants] = useState(1);
  const [maxParticipants, setMaxParticipants] = useState(1);
  const [gender, setGender] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = () => {
    // TODO: Implement Google login
    setIsLoggedIn(true);
  };

  const handleCreateEvent = (type) => {
    setEventType(type);
    setIsCreatingEvent(true);
    onOpen();
  };

  const handleSubmitEvent = () => {
    // TODO: Submit event details
    onClose();
    setIsCreatingEvent(false);
  };

  return (
    <Box>
      <VStack spacing={8} align="center" m={8}>
        <Heading>Meeting & Dating App</Heading>
        {!isLoggedIn && (
          <>
            <Button leftIcon={<FaGoogle />} onClick={handleLogin}>
              Sign Up / Login with Google
            </Button>
            <Text>or</Text>
            <Button variant="outline">Browse Events</Button>
          </>
        )}
        {isLoggedIn && (
          <>
            <HStack spacing={8}>
              <VStack>
                <Heading size="md">Join an Event</Heading>
                <Image w={400} h={300} objectFit="cover" src="https://images.unsplash.com/photo-1674574124345-02c525664b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBtYXBzJTIwc2NyZWVuc2hvdCUyMHdpdGglMjBldmVudCUyMG1hcmtlcnN8ZW58MHx8fHwxNzEzNDA5NDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Event map" />
              </VStack>
              <VStack>
                <Heading size="md">Create an Event</Heading>
                <VStack>
                  <Button onClick={() => handleCreateEvent("existing")} w="100%">
                    Join Existing City Event
                  </Button>
                  <Button onClick={() => handleCreateEvent("custom")} w="100%">
                    Create Custom Event
                  </Button>
                </VStack>
              </VStack>
            </HStack>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a New Event</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {isCreatingEvent && eventType === "custom" && (
                    <VStack spacing={4}>
                      <Input value="Selected Location Name" isReadOnly />
                      <HStack>
                        <Input type="number" placeholder="Number of Participants" value={participants} onChange={(e) => setParticipants(e.target.value)} />
                        <Input type="number" placeholder="Max Participants" value={maxParticipants} onChange={(e) => setMaxParticipants(e.target.value)} />
                      </HStack>
                      <Select placeholder="Preferred Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="any">Any</option>
                      </Select>
                      <Select placeholder="Payment Option" value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)}>
                        <option value="individual">Everyone Own Account</option>
                        <option value="split">50% - 50% Split</option>
                        <option value="organizer">Organizer Pays</option>
                        <option value="participants">Participants Pay</option>
                      </Select>
                      <Button onClick={handleSubmitEvent}>Create Event</Button>
                    </VStack>
                  )}
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
