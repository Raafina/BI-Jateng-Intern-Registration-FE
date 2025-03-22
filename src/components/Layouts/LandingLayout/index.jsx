import LandingHeaderLayout from './LandingHeaderLayout';
import LandingFooterLayout from './LandingFooterLayout';
import PropTypes from 'prop-types';
const LandingLayout = (props) => {
  const { children } = props;
  return (
    <>
      <LandingHeaderLayout />
      {children}
      <LandingFooterLayout />
    </>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};
export default LandingLayout;
