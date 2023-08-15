import Styled from 'styled-components';
import { CloseIcon } from './../../atoms/IconButton';
import Box from './../../layout/Box';
import Flex from './../../layout/Flex';

const ImagePreviewContainer = Styled(Box)`
    position: relative;
`;

const CloseBox = Styled(Flex)`
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 0 6px 0 6px;
    background-color: rgba(44, 44, 44, 0.66);
    cursor: pointer;
`;

interface ImagePreviewProps {
    src?: string;
    alt?: string;
    height?: string;
    width?: string;
    onRemove?: (src: string) => void;
}

const ImagePreview = ({
    src,
    alt,
    height,
    width,
    onRemove,
}: ImagePreviewProps) => {
    const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onRemove && src && onRemove(src);

        return false;
    };

    return (
        <ImagePreviewContainer height={height} width={width}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} height={height} width={width} />
            <CloseBox
                alignItems="center"
                justifyContent="center"
                onClick={handleCloseClick}
            >
                <CloseIcon size={24} color="white" />
            </CloseBox>
        </ImagePreviewContainer>
    );
};

export default ImagePreview;
