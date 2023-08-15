import Styled from 'styled-components';
import ScaleImage from './../../atoms/ScaleImage';
import Text from './../../atoms/Text';
import Box from './../../layout/Box';

interface ProductCardProps {
    title: string;
    price: number;
    imageUrl: string;
    blurDataUrl?: string;
    variant?: 'listing' | 'small' | 'detail';
}

const ProductCardContainer = Styled.div`
    position: relative;
`;

const ProductCardImageContainer = Styled.div`
    z-index: 99;
`;

const ProductCardInfo = Styled.div`
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
`;

const ProductCard = ({
    title,
    price,
    imageUrl,
    blurDataUrl,
    variant = 'listing',
}: ProductCardProps) => {
    const { size, imgSize } = (() => {
        switch (variant) {
            case 'detail':
                return { size: { base: '320px', md: '540px' }, imgSize: 540 };
            case 'listing':
                return { size: { base: '160px', md: '240px' }, imgSize: 240 };
            default:
                return { size: { base: '160px' }, imgSize: 160 };
        }
    })();

    return (
        <ProductCardContainer>
            {variant !== 'small' && (
                <ProductCardInfo>
                    <Box>
                        <Text
                            as="h2"
                            fontSize={{ base: 'small', md: 'mediumLarge' }}
                            letterSpacing={{ base: 2, md: 3 }}
                            lineHeight={{ base: '32px', md: '48px' }}
                            backgroundColor="white"
                            margin={0}
                            paddingRight={2}
                            paddingLeft={2}
                            paddingTop={0}
                            paddingBottom={0}
                        >
                            {title}
                        </Text>
                        <Text
                            as="span"
                            fontWeight="bold"
                            display="inline-block"
                            backgroundColor="white"
                            fontSize={{ base: 'extraSmall', md: 'medium' }}
                            lineHeight={{ base: '8px', md: '12px' }}
                            letterSpacing={{ base: 2, md: 4 }}
                            margin={0}
                            padding={{ base: 1, md: 2 }}
                        >
                            {price}円
                        </Text>
                    </Box>
                </ProductCardInfo>
            )}
            <ProductCardImageContainer>
                {blurDataUrl && (
                    <ScaleImage
                        alt={'Product Image'}
                        src={imageUrl}
                        width={imgSize ?? 240}
                        height={imgSize ?? 240}
                        containerWidth={size}
                        containerHeight={size}
                        // objectFit="cover"
                        placeholder="blur"
                        blurDataURL={blurDataUrl}
                    />
                )}
                {!blurDataUrl && (
                    <ScaleImage
                        alt={'Product Image'}
                        src={imageUrl}
                        width={imgSize ?? 240}
                        height={imgSize ?? 240}
                        containerWidth={size}
                        containerHeight={size}
                        // objectFit="cover"
                    />
                )}
            </ProductCardImageContainer>
            {variant === 'small' && (
                <Box marginTop={1}>
                    <Text as="h2" variant="medium" margin={0} padding={0}>
                        {title}
                    </Text>
                    <Text as="span" variant="medium">
                        {price}円
                    </Text>
                </Box>
            )}
        </ProductCardContainer>
    );
};

export default ProductCard;
