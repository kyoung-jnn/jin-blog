'use client';

import media from '@/styles/media';
import { fadeLeft } from '@/utils/animation';
import styled from '@emotion/styled';
import { PropsWithChildren, memo } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from './IconButton';

function Sidebar({ children }: PropsWithChildren) {
  console.log('Sidebar');
  const router = useRouter();

  return (
    <Wrapper>
      <IconButton name="ArrowUpLeft" onClick={() => router.back()} />
      {children}
    </Wrapper>
  );
}

export default memo(Sidebar);

const Wrapper = styled.aside`
  position: relative;
  display: none;

  ${media.desktop} {
    position: sticky;
    display: grid;
    gap: 20px;
    top: 90px;
    animation: ${fadeLeft} 0.5s forwards;
  }
`;
