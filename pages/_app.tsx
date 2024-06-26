import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import { MenuWrapper } from "../components/MenuWrapper";

const messages = {
  en,
  fr,
};

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <IntlProvider
      locale={locale ? locale : "en"}
      messages={locale ? messages[locale === "fr" ? "fr" : "en"] : undefined}
    >
      <ChakraProvider>
        <MenuWrapper />
        <Component {...pageProps} />
      </ChakraProvider>
    </IntlProvider>
  );
}
