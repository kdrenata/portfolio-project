import {Icon} from "../icon/Icon.tsx";
import {FC} from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type PropsType = {
    src: string;
    top?: string;
    left?: string;
    right?: string;
    width?: string;
    height?: string;
    viewBox?: string;



}
export const Circle =(props:PropsType)=> {
    return (
        <StyledCircle {...props}>
            <Icon iconId={props.src} width={'82'} height={'95'} viewBox={'-24 -24 150 150'}/>
        </StyledCircle>
    )
}

const StyledCircle: FC<PropsType> = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 90px;
    height: 90px;
    top:${(props=>props.top && props.top)};
    left:${(props=>props.left && props.left)};
    right:${(props=>props.right && props.right)};
    z-index: 2;
    border-radius: 50%;
    background: rgb(50,49,49);

    @media ${theme.media.mobile} {
        width: 60px;
        height: 60px;
    }
`