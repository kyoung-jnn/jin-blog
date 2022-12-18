import NextImage, { ImageProps } from 'next/image';
import styled, { css } from 'styled-components';

const sizes = {
  small: {
    width: 352,
    height: 198,
  },
  medium: {
    width: 560,
    height: 315,
  },
  large: {
    width: 720,
    height: 405,
  },
} as const;

interface Props extends ImageProps {
  src: string;
  auto: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Image = ({ src, auto = false, size = 'large', ...rest }: Props) => {
  return (
    <ImageWrapper aria-label="포스팅 이미지" auto={auto}>
      <_Image
        src={src}
        alt={src}
        layout={auto ? 'fill' : 'fixed'}
        objectFit={auto ? 'cover' : 'fill'}
        placeholder="blur"
        blurDataURL={src}
        {...(!auto && sizes[size])}
        {...rest}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div<{ auto: boolean }>`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  ${({ auto }) =>
    auto &&
    css`
      display: block;
      & > span {
        position: unset !important;
      }
      & img {
        position: relative !important;
        height: auto !important;
      }
    `};
`;

const _Image = styled(NextImage)`
  border-radius: 5px;
`;

export default Image;
