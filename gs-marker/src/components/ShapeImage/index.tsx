import Image, { ImageProps } from 'next/image';
import Styled from 'styled-components';

type ImageShape = 'circle' | 'square';
type ShapeImageProps = ImageProps & { shape?: ImageShape };

const ImageWithShape = Styled(Image)<{ shape?: ImageShape }>`
    border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`;

const ShapeImage = (props: ShapeImageProps) => {
    const { shape, ...imageProps } = props;

    return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;
