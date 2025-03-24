import { useState } from 'react';
import DashboardSidebarLayout from './DashboardSidebarLayout';
import { SIDEBAR_ADMIN } from './DashboardLayout.constant';
import { Navbar, NavbarMenuToggle } from '@heroui/react';
import PropTypes from 'prop-types';
const DashboardLayout = (props) => {
  const { children, description, title } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-screen-3xl 3xl:container flex">
      <DashboardSidebarLayout sidebarItems={SIDEBAR_ADMIN} isOpen={open} />
      <div className="h-screen w-full overflow-y-auto px-8 py-4">
        <Navbar
          className="flex justify-between bg-transparent px-0"
          isBlurred={false}
          classNames={{ wrapper: 'p-0' }}
          position="static">
          <h1 className="text-3xl font-bold">{title}</h1>
          <NavbarMenuToggle
            aria-label={open ? 'Close Menu' : 'Open Menu'}
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          />
        </Navbar>
        <p className="mb-4 text-small font-sans">{description}</p>
        {children}
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DashboardLayout;
