import * as React from 'react';
import * as styled from 'styled-components';

type Props = {
  imageUrl: string;
}

const Wrapper = styled.section`
    padding: 1em;
  `;

const Header = (props: Props) => {
  return (
    <Wrapper/>
  )
};