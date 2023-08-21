import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";

export default function AreYouSure({
  isOpen,
  onClose,
  joinProgram,
  joiningProgram,
}) {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent rounded={"xl"}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Jelentkezés egy programra
          </AlertDialogHeader>

          <AlertDialogBody>
            Biztos vagy benne, hogy jelentkezni szeretnél erre a programra? A
            jelentkezésedet elküldés után csak rendszergazdáink tudják törölni!
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose} rounded={"xl"}>
              Mégsem
            </Button>
            <Button
              colorScheme="orange"
              rounded={"xl"}
              onClick={() => {
                joinProgram(joiningProgram);
                onClose();
              }}
              ml={3}
            >
              Jelentkezem
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
