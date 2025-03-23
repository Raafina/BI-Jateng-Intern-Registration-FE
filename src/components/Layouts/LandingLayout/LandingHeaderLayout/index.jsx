import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  Link,
  NavbarMenuToggle,
  Button,
} from '@heroui/react';
import BILogo from '../../../../assets/logo/bank-indonesia-with-text.svg';
import { NAVBAR_ITEMS } from './LandingHeaderLayout.constant';
import { useState } from 'react';
const LandingHeaderLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="fixed top-0 left-0 w-full shadow-md z-50"
      classNames={{
        wrapper: 'max-w-7xl px-6 ',
      }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={BILogo} alt="BI Logo" width={170} height={90} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className="text-black hover:underline hover:text-primary font-sans">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            radius="full"
            as={Link}
            href="/register"
            target="_blank"
            className=" font-inter px-8 bg-blue text-white">
            Daftar
          </Button>
        </NavbarItem>

        <NavbarMenu>
          {NAVBAR_ITEMS.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-black hover:underline hover:text-primary font-sans"
                href={item.href}
                onPress={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Link
            as={Link}
            href="/register"
            target="_blank"
            className="font-sans hover:underline">
            Daftar
          </Link>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};

export default LandingHeaderLayout;
