import NextLink from 'next/link';

import {
  useColorMode,
  Button,
  Flex,
  Box,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { navBgColor } from 'styles/darkMode';

const LINKS = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/dashboard',
    text: 'Dashboard'
  },
  {
    href: '/blog',
    text: 'Blog'
  },
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/photos',
    text: 'Photos'
  }
];

const NavContainer = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(navBgColor.light, navBgColor.dark);

  const getLink = ({ href, text }) => (
    <NextLink href={href} passHref key={text}>
      <Button
        as="a"
        variant="ghost"
        p={[1, 4]}
        fontSize={['md', 'lg']}
        letterSpacing="tight"
      >
        {text}
      </Button>
    </NextLink>
  );
  return (
    <NavContainer
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      width="100%"
      bg={bg}
      as="nav"
      p={8}
      mt={[0, 8]}
      mb={8}
      mx="auto"
    >
      <IconButton
        aria-label="toggle dark mode"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
      <Box>{LINKS.map(getLink)}</Box>
    </NavContainer>
  );
};

export default Nav;
