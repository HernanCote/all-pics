import styled from 'styled-components/macro';
import Loader from 'react-loader-spinner';

const Root = styled.div`
  height: calc(100vh - 3rem);
  width: 100vw;
  position: relative;
`;

const Spinner = styled(Loader)`
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export {
  Root,
  Spinner,
};