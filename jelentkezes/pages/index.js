import { Button, Heading, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Button onClick={signIn}>Bejelentkezés</Button>
      {session?.user && (
        <>
          <Heading>Üdvözöllek {session.user.name}!</Heading>
          <Text>Bejelentkezve mint {session.user.email}</Text>
          <Link href="/auth/signout?callbackUrl=/">
            <Button>Kijelentkezés</Button>
          </Link>
        </>
      )}
    </>
  );
}
