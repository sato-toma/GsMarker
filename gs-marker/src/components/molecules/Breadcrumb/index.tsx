import Styled from 'styled-components';
import Flex from './../../layout/Flex';

const BreadcrumbRoot = Styled(Flex)`
    list-style: none;
    padding: 0px;
    margin: 0px;
`;

interface BreadcrumbProps {
    children?: React.ReactNode;
}

const Breadcrumb = ({ children }: BreadcrumbProps) => {
    return <BreadcrumbRoot as="ol">{children}</BreadcrumbRoot>;
};

export default Breadcrumb;
