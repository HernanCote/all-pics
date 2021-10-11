import styled from 'styled-components/macro';

import { getMediaMinWidth } from '../../utils/styles';

const Container = styled.div`
  margin-top: 1rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  ${getMediaMinWidth('xsm')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${getMediaMinWidth('sm')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${getMediaMinWidth('md')} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${getMediaMinWidth('lg')} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export {
  Container,
};