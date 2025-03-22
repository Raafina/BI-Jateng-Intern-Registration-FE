import LandingHeaderLayout from './LandingHeaderLayout';
import LandingFooterLayout from './LandingFooterLayout';
import PropTypes from 'prop-types';
const LandingLayout = (props) => {
  const { children } = props;
  return (
    <>
      <LandingHeaderLayout />
      <div className="container mx-auto px-4 pb-9 sm:px-6 md:px-8 xl:px-36 ">
        {children}
      </div>
      <LandingFooterLayout />
    </>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};
export default LandingLayout;
