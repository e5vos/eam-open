import React, { useState, useEffect } from "react";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Error() {
  const [errorText, setErrorText] = useState("Betöltés...");
  const router = useRouter();

  // Get error code from URL query string (?error=xxxxx)
  const { error } = router.query;

  // Add errorText when error is present
  useEffect(() => {
    switch (error) {
      case "Configuration":
        setErrorText(
          "Valamilyen hibát ejtettünk a bejelentkezés konfigurálásakor. Csapatunk nagy eséllyel ismeri már a hibát és a megoldásán dolgozik. Kérlek próbáld újra később."
        );
        break;
      case "AccessDenied":
        setErrorText(
          "Úgy tűnik nincs jogosultságod bejelentkezni. Kérlek próbáld újra később."
        );
        break;
      case "Default":
        setErrorText(
          "Valamilyen hiba történt a bejelentkezés során. Kérlek próbáld újra később."
        );
        break;
    }
  }, [error]);

  return (
    <Flex w="full" h="full" align="center" justify="center">
      <Heading>Hiba történt</Heading>
      <Text>{errorText}</Text>
      <Link href={"/auth/signin"}>
        <Button>Újrapróbálom</Button>
      </Link>
    </Flex>
  );
}
