import React, { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import ProgramGrid from "@/components/programGrid";
import OpenedProgram from "@/components/openedProgram";
import AreYouSure from "@/components/areYouSure";
import Navigation from "@/components/navigation";

export default function Home() {
  const { data: session } = useSession();
  const toast = useToast({
    position: "top-right",
    variant: "left-accent",
    isClosable: true,
  });
  const [activePrograms, setActivePrograms] = useState([]);
  const [openedProgram, setOpenedProgram] = useState(null);
  const [joiningProgram, setJoiningProgram] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getActivePrograms();
  }, []);

  return (
    <>
      <Navigation />
      <AreYouSure
        isOpen={isOpen}
        onClose={onClose}
        joinProgram={joinProgram}
        joiningProgram={joiningProgram}
      />
      <OpenedProgram
        program={openedProgram}
        joinProgram={openAlertDialog}
        closeProgram={closeProgram}
      />
      <ProgramGrid
        programs={activePrograms}
        joinProgram={openAlertDialog}
        openProgram={openProgram}
      />
    </>
  );

  async function getActivePrograms() {
    const resp = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_URL + "/program/getActivePrograms"
    );

    setActivePrograms(resp.data.data);
  }

  function openAlertDialog(programId) {
    if (!session || !session.user) {
      toast({
        title: "Előbb jelentkezz be!",
        description:
          "Programra jelentkezés előtt be kell jelentkezned, hogy azonosítani tudjunk.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setJoiningProgram(programId);
    onOpen();
  }

  async function joinProgram(programId) {
    if (!session || !session.user) {
      toast({
        title: "Előbb jelentkezz be!",
        description:
          "Programra jelentkezés előtt be kell jelentkezned, hogy azonosítani tudjunk.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const resp = await axios.post(
      process.env.NEXT_PUBLIC_SERVER_URL + "/program/joinProgram",
      {
        programObjectId: programId,
        name: session.user.name,
        email: session.user.email,
      }
    );

    switch (resp.data.status) {
      case "ok":
        toast({
          title: "Sikeres jelentkezés!",
          description: resp.data.data,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        break;
      case "already registered":
        toast({
          title: "Már jelentkeztél!",
          description: "Erre a programra már regisztráltál.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        break;
      default:
        toast({
          title: "Hiba történt!",
          description: resp.data.data,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        break;
    }
  }

  function openProgram(program) {
    setOpenedProgram(program);
  }

  function closeProgram() {
    setOpenedProgram(null);
  }
}
