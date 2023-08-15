import Link from 'next/link';
import Styled from 'styled-components';
import { useAuthContext } from './../../../contexts/AuthContext';
import { useShoppingCartContext } from './../../../contexts/ShoppingCartContext';
import AppLogo from './../../atoms/AppLogo';
import Button from './../../atoms/Button';
import {
    SearchIcon,
    PersonIcon,
    ShoppingCartIcon,
} from './../../atoms/IconButton';
import ShapeImage from './../../atoms/ShapeImage';
import Spinner from './../../atoms/Spinner';
import Text from './../../atoms/Text';
import Box from './../../layout/Box';
import Flex from './../../layout/Flex';
import BadgeIconButton from './../../molecules/BadgeIconButton';

const HeaderRoot = Styled.header`
    height: 88px;
    padding: ${({ theme }) => theme.space[2]} 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Nav = Styled(Flex)`
    & > span:not(:first-child) {
        margin-left: ${({ theme }) => theme.space[2]};
    }
`;

const NavLink = Styled.span`
    display: inline;
`;

const Anchor = Styled(Text)`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Header = () => {
    const { cart } = useShoppingCartContext();
    const { authUser, isLoading } = useAuthContext();

    return (
        <HeaderRoot>
            <Flex
                paddingLeft={3}
                paddingRight={3}
                justifyContent="space-between"
            >
                <Nav as="nav" height="56px" alignItems="center">
                    <NavLink>
                        <Link href="/" passHref>
                            <Anchor as="a">
                                <AppLogo />
                            </Anchor>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Link href="/search" passHref>
                                <Anchor as="a">すべて</Anchor>
                            </Link>
                        </Box>
                    </NavLink>
                    <NavLink>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Link href="/search/clothes" passHref>
                                <Anchor as="a">トップス</Anchor>
                            </Link>
                        </Box>
                    </NavLink>
                    <NavLink>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Link href="/search/book" passHref>
                                <Anchor as="a">本</Anchor>
                            </Link>
                        </Box>
                    </NavLink>
                    <NavLink>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Link href="/search/shoes" passHref>
                                <Anchor as="a">シューズ</Anchor>
                            </Link>
                        </Box>
                    </NavLink>
                </Nav>
                <Nav as="nav" height="56px" alignItems="center">
                    <NavLink>
                        <Box display={{ base: 'block', md: 'none' }}>
                            <Link href="/search" passHref>
                                <Anchor as="a">
                                    <SearchIcon />
                                </Anchor>
                            </Link>
                        </Box>
                    </NavLink>
                    <NavLink>
                        <Link href="/cart" passHref>
                            <Anchor as="a">
                                <BadgeIconButton
                                    icon={<ShoppingCartIcon size={24} />}
                                    size="24px"
                                    badgeContent={
                                        cart.length === 0
                                            ? undefined
                                            : cart.length
                                    }
                                    badgeBackgroundColor="primary"
                                />
                            </Anchor>
                        </Link>
                    </NavLink>
                    <NavLink>
                        {(() => {
                            if (authUser) {
                                return (
                                    <Link href={`/users/${authUser.id}`} passHref>
                                        <Anchor as="a">
                                            <ShapeImage
                                                shape="circle"
                                                src={authUser.profileImageUrl}
                                                alt={authUser.id}
                                                width={24}
                                                height={24}
                                                data-testid="profile-shape-image"
                                            />
                                        </Anchor>
                                    </Link>
                                );
                            } else if (isLoading) {
                                 return <Spinner size={20} strokeWidth={2} />;
                            } else {
                                return (
                                    <Link href="/signin" passHref>
                                        <Anchor as="a">
                                            <PersonIcon size={24} />
                                        </Anchor>
                                    </Link>
                                );
                            }
                        })()}
                    </NavLink>
                    <NavLink>
                        <Link href="/sell" passHref>
                            <Button as="a">出品</Button>
                        </Link>
                    </NavLink>
                </Nav>
            </Flex>
        </HeaderRoot>
    );
};

export default Header;
