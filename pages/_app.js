import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);

  switch (router.pathname) {
    case "/":
      break;
    case "/premium":
      break;
    case "/download":
      break;

    default:
      break;
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
