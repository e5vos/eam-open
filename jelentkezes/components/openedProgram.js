import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalBody,
  Text,
  Highlight,
  Heading,
  ModalCloseButton,
  Avatar,
  Flex,
  Image,
  ModalFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function OpenedProgram({ program, joinProgram, closeProgram }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (program) {
      onOpen();
    } else {
      onClose();
    }
  }, [program]);

  return (
    <Modal isOpen={isOpen} size={"xl"} onClose={closeProgram}>
      <ModalOverlay />
      <ModalContent rounded={"xl"}>
        <ModalHeader as={Flex} gap={3} alignItems={"center"}>
          <Avatar name={program?.title} src={program?.logoURL} size={"sm"} />
          {program?.title}
          <ModalCloseButton rounded={"xl"} />
        </ModalHeader>
        <ModalBody>
          <Image
            src={program?.bannerURL}
            alt="A program képe"
            rounded={"xl"}
            maxH={"200px"}
            objectFit={"cover"}
            width={"full"}
            mt={-2}
            mb={4}
          />
          <Text>{program?.description}</Text>
          <Heading size="md" lineHeight={"tall"} mt={4}>
            <Highlight
              query={"Időpont:"}
              styles={{
                px: "4",
                py: "1",
                rounded: "full",
                bg: "orange.100",
                color: "orange.500",
              }}
            >
              {`Időpont: ${program?.dates}`}
            </Highlight>
          </Heading>
          <Heading size="md" lineHeight={"tall"} mt={2}>
            <Highlight
              query={"Státusz:"}
              styles={{
                px: "4",
                py: "1",
                rounded: "full",
                bg: "orange.100",
                color: "orange.500",
              }}
            >
              {`Státusz: ${
                program?.status === "active"
                  ? program?.registerEnabled
                    ? "Jelentkezés nyitva"
                    : "Jelentkezés lezárva"
                  : "A program már lezajlott"
              }`}
            </Highlight>
          </Heading>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing="2" ml={"auto"}>
            <Text fontSize={"sm"}>
              Figyelem! A gombra kattintva rögtön jelentkezel a programra!
            </Text>
            <Button
              colorScheme={"orange"}
              onClick={() => joinProgram(program?._id)}
              rounded={"xl"}
              px={12}
            >
              Jelentkezem a programra
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
