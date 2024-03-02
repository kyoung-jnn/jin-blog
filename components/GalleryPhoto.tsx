import { css } from '@emotion/react';
import Image, { StaticImageData } from 'next/image';
import GalleryCaption from './GalleryCaption';

interface Props {
  src: StaticImageData;
  alt: string;
}

function GalleryPhoto({ src, alt }: Props) {
  return (
    <figure
      css={css`
        all: unset;
      `}
    >
      <article
        css={css`
          position: relative;
          width: 100%;
          height: 600px;
        `}
      >
        <Image src={src} fill alt={alt} style={{ objectFit: 'cover' }} />
      </article>
      <GalleryCaption>{alt}</GalleryCaption>
    </figure>
  );
}

export default GalleryPhoto;
