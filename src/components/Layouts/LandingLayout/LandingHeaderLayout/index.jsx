import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';
import BILogo from '../../../../assets/logo/bank-indonesia-with-text.svg';
import { NAVBAR_ITEMS } from './LandingHeaderLayout.constant';
const LandingHeaderLayout = () => {
  return (
    <Navbar
      isBordered
      classNames={{
        wrapper: 'max-w-7xl px-6 ',
      }}>
      <NavbarBrand>
        <img src={BILogo} alt="BI Logo" className="" width={170} height={90} />
      </NavbarBrand>
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
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            radius="full"
            as={Link}
            color="primary"
            href="/register"
            target="_blank"
            className=" font-inter px-8">
            Daftar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default LandingHeaderLayout;
