import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  IconButton,
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import githubLogo from "../public/static/icons/github.png";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export function MenuWrapper() {
  const [isOpen, setIsOpen] = React.useState(false);

  const intl = useIntl();
  const locale = intl.locale;
  const projects = intl.formatMessage({ id: "MenuWrapper.projects" });
  const skills = intl.formatMessage({
    id: "MenuWrapper.skills",
  });

  const Links = [
    { label: "Home", href: "/" },
    { label: "CV", href: "/CV.pdf", file: true },
    { label: skills, href: `/${locale}/skills` },
    { label: projects, href: `/${locale}/projects` },
    { label: "Contact", href: `/${locale}/contact` },
  ];

  const { locales } = useRouter();

  function NavLink({
    children,
    href,
    file,
  }: {
    children: React.ReactNode;
    href: string;
    file?: boolean;
  }) {
    return (
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={href}
        download={file}
      >
        {children}
      </Link>
    );
  }

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={() => setIsOpen(!isOpen)}
        />
        <HStack spacing={8} alignItems={"center"}>
          {Links.map((link) => (
            <NavLink href={link.href} key={link.label} file={link.file}>
              {link.label}
            </NavLink>
          ))}
        </HStack>
        <div className="space-x-2 flex items-center">
          {locales ? (
            <div className="space-x-2 flex">
              {[...locales].sort().map((locale) => (
                <Link key={locale} href={`/${locale}`}>
                  {locale}
                </Link>
              ))}
            </div>
          ) : null}

          <Menu>
            <a href="https://github.com/moon9000/">
              <img src={githubLogo.src} alt="github profile" />
            </a>
          </Menu>
        </div>
      </Flex>
    </Box>
  );
}
