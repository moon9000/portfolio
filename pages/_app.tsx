import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import fr from "../lang/fr.json";

const messages = {
  en,
  fr,
};

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </IntlProvider>
  );
}
