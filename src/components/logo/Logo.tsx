import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo href="">
            <Icon iconId={'code'}/>
        </StyledLogo>
    );
};
const StyledLogo = styled.a`
    display: flex;
`


