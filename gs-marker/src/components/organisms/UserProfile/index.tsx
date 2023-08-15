import ShapeImage from './../../atoms/ShapeImage';
import Text from './../../atoms/Text';
import Box from './../../layout/Box';
import Flex from './../../layout/Flex';

interface UserProfileProps {
    imageSize?: 'normal' | 'small';
    username: string;
    profileImageUrl: string;
    numberOfProducts: number;
    description?: string;
}

const UserProfile = ({
    imageSize = 'normal',
    username,
    profileImageUrl,
    numberOfProducts,
    description,
}: UserProfileProps) => {
    const profileImageSize = imageSize === 'small' ? '100' : '120';

    return (
        <Flex>
            <Box minWidth={profileImageSize}>
                <ShapeImage
                    shape="circle"
                    quality="85"
                    src={profileImageUrl}
                    alt={username}
                    height={profileImageSize}
                    width={profileImageSize}
                />
            </Box>
            <Box padding={1}>
                <Flex
                    height="100%"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Box>
                        <Text
                            as="p"
                            fontWeight="bold"
                            variant="mediumLarge"
                            marginTop={0}
                            marginBottom={1}
                        >
                            {username}
                        </Text>
                        <Text marginBottom={1} marginTop={0} as="p">
                            {numberOfProducts}点出品済
                        </Text>
                        {imageSize === 'normal' && (
                            <Text margin={0} as="p">
                                {description}
                            </Text>
                        )}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default UserProfile;
