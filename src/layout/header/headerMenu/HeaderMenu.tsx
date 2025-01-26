import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 145px;
        justify-content: center;
        
    }
`
const Link = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    color: transparent;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.accentBg};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;
    z-index: 0;
    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accentBg};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1; 
        
        transform: scale(0);
    }
    
    &:hover {
        &::before {
            transform: scale(1);
 
        }
        
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};
            
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
   
        
    }
`