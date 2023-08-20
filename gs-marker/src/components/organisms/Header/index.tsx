import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import MyButton from '../../atoms/MyButton';
import { SearchIcon, PersonIcon, ShoppingCartIcon } from '../../atoms/MyIconButton';
import AppLogo from './../../../components/atoms/AppLogo';
import ShapeImage from './../../../components/atoms/ShapeImage';
import Spinner from './../../../components/atoms/Spinner';
import Text from './../../../components/atoms/Text';
import Box from './../../../components/layout/Box';
import Flex from './../../../components/layout/Flex';
import BadgeIconButton from './../../../components/molecules/BadgeIconButton';
import { useAuthContext } from './../../../contexts/AuthContext';
import { useShoppingCartContext } from './../../../contexts/ShoppingCartContext';

// ヘッダーのルート
const HeaderRoot = styled.header`
  height: 88px;
  padding: ${({ theme }) => theme.space[2]} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

// ナビゲーション
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`;

// ナビゲーションのリンク
const NavLink = styled.span`
  display: inline;
`;

// アンカー
const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/**
 * ヘッダー
 */
const Header = () => {
  const { cart } = useShoppingCartContext();
  const { authUser, isLoading } = useAuthContext();

  return (
    <HeaderRoot>
      <Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Link href="/">
              <Anchor>
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search">
                <Anchor>すべて</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search/clothes">
                <Anchor>トップス</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search/book">
                <Anchor>本</Anchor>本
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href="/search/shoes">
                <Anchor>シューズ</Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Box display={{ base: 'block', md: 'none' }}>
              <Link href="/search">
                <Anchor>
                  <SearchIcon />
                </Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Link href="/cart">
              <Anchor>
                <BadgeIconButton
                  icon={<ShoppingCartIcon size={24} />}
                  size="24px"
                  badgeContent={cart.length === 0 ? undefined : cart.length}
                  badgeBackgroundColor="primary"
                />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            {(() => {
              // 認証していたらアイコンを表示
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`}>
                    <Anchor>
                      <ShapeImage
                        alt="Product Image"
                        shape="circle"
                        src={authUser.profileImageUrl}
                        data-testid="profile-shape-image"
                      />
                    </Anchor>
                  </Link>
                );
              } else if (isLoading) {
                // ロード中はスピナーを表示
                return <Spinner size={20} strokeWidth={2} />;
              } else {
                // サインインしてない場合はアイコンを表示
                return (
                  <Link href="/signin">
                    <Anchor>
                      <PersonIcon size={24} />
                    </Anchor>
                  </Link>
                );
              }
            })()}
          </NavLink>
          <NavLink>
            <Link href="/sell">
              <MyButton>出品</MyButton>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default Header;
