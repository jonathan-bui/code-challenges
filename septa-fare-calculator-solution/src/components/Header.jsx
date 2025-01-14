import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    background-color: #595959;
    color: white;
    justify-content: center;
`;
const StyledSvg = styled.svg`
    width: 3rem;
`;
const StyledHeaderTitle = styled.h1`
    margin: 0 0 0 1rem;
`;
const Header = (props) => {
    const {title} = props;
    return (
        <div>
            <StyledHeader>
                <StyledSvg viewBox="0 0 500 369.109">
                    <g xmlns="http://www.w3.org/2000/svg">
                        <rect x="54.1" y="14.666" fill="#FFFFFF" width="391.8" height="340.389" />
                        <path id="path2578" fill="#F14728" d="M441.775,14.666H340.441L180.888,127.332h148.665l115.779,115.333L333.556,355.107h108.22   c25.555,0,44.221-25.332,44.221-43.331V58.221C485.996,39.998,467.33,14.666,441.775,14.666L441.775,14.666z" />
                        <path id="path2580" fill="#1F4FA3" d="M58.666,355.107h101.111l159.554-112.219H170.887L54.666,127.332L167.11,14.666H58.666   c-25.778,0-44,25.332-44,43.776v253.555C14.666,329.775,32.888,355.107,58.666,355.107L58.666,355.107z" />
                        <path id="path2582" fill="#F14728" d="M206.443,137.998H192.22l87.111,87.107c4.001,3.338,7.11,7.336,13.999,6.893h14.89   l-87.555-86.889C216.665,140.664,213.776,137.998,206.443,137.998L206.443,137.998z" />
                    </g>
                </StyledSvg>
                <StyledHeaderTitle>{title}</StyledHeaderTitle>
            </StyledHeader>
        </div>
    );
};

export default Header;
