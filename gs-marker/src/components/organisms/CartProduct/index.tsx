import Image from 'next/image';
import Link from 'next/link';
import Styled from 'styled-components';
import Button from './../../atoms/Button';
import Text from './../../atoms/Text';
import Box from './../../layout/Box';
import Flex from './../../layout/Flex';

const RemoveText = Styled(Text)`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

interface CartProductProps {
    productId: number;
    imageUrl: string;
    title: string;
    price: number;
    onBuyButtonClick?: (productId: number) => void;
    onRemoveButtonClick?: (productId: number) => void;
}

const CartProduct = ({
    productId,
    imageUrl,
    title,
    price,
    onBuyButtonClick,
    onRemoveButtonClick,
}: CartProductProps) => {
    return (
        <Flex justifyContent="space-between">
            <Flex>
                <Box width="120px" height="120px">
                    <Link href={`/products/${productId}`} passHref>
                        <Image
                            quality="85"
                            src={imageUrl}
                            alt={title}
                            height={120}
                            width={120}
                            objectFit="cover"
                        />
                    </Link>
                </Box>
                <Box padding={1}>
                    <Flex
                        height="100%"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Text
                                fontWeight="bold"
                                variant="mediumLarge"
                                marginTop={0}
                                marginBottom={1}
                                as="p"
                            >
                                {title}
                            </Text>
                            <Text margin={0} as="p">
                                {price}円
                            </Text>
                        </Box>
                        <Flex marginTop={{ base: 2, md: 0 }}>
                            <Button
                                width={{ base: '100px', md: '200px' }}
                                onClick={() =>
                                    onBuyButtonClick &&
                                    onBuyButtonClick(productId)
                                }
                            >
                                Purchase
                            </Button>
                            <Button
                                marginLeft={1}
                                width={{ base: '100px', md: '200px' }}
                                display={{ base: 'block', md: 'none' }}
                                variant="danger"
                                onClick={() =>
                                    onRemoveButtonClick &&
                                    onRemoveButtonClick(productId)
                                }
                            >
                                Remove item from your cart
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
            <Box display={{ base: 'none', md: 'block' }}>
                <RemoveText
                    color="danger"
                    onClick={() =>
                        onRemoveButtonClick && onRemoveButtonClick(productId)
                    }
                >
                    Remove item from your cart
                </RemoveText>
            </Box>
        </Flex>
    );
};

export default CartProduct;
