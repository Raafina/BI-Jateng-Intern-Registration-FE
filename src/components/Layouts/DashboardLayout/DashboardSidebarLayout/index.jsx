import { cn } from '../../../../utils/cn';
import BILogo from '../../../../assets/logo/bank-indonesia-with-text.svg';
import { Listbox, ListboxItem, Button } from '@heroui/react';
import { useLocation } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';
import PropTypes from 'prop-types';

const DashboardSidebarLayout = (props) => {
  const { sidebarItems, isOpen } = props;

  const location = useLocation();

  return (
    <div
      className={cn(
        'fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r-1 border-default-200 bg-white px-4 py-6 transition-all lg:relative lg:translate-x-0',
        { 'translate-x-0': isOpen }
      )}>
      <div>
        <div className="flex justify-center">
          <img
            src={BILogo}
            alt="BI Logo"
            className="mb-4"
            width={240}
            height={90}
          />
        </div>
        <Listbox variant="solid" aria-label="Dashboard Menu">
          {sidebarItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <ListboxItem
                key={item.key}
                className={cn('my-1 h-12 text-2xl', {
                  'bg-primary text-white': isActive,
                })}
                startContent={item.icon}
                textValue={item.label}
                aria-labelledby={item.label}
                aria-describedby={item.label}
                onPress={() => {
                  window.location.href = item.href;
                }}>
                <p className="text-small font-inter">{item.label}</p>
              </ListboxItem>
            );
          })}
        </Listbox>
      </div>
      <div className="flex items-center p-1">
        <Button
          color="danger"
          fullWidth
          variant="light"
          className="flex justify-start rounded-lg px-2 py-1.5"
          size="lg"
          onPress={() => {}}>
          <CiLogout />
          Logout
        </Button>
      </div>
    </div>
  );
};

DashboardSidebarLayout.propTypes = {
  sidebarItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default DashboardSidebarLayout;
