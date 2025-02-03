import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";


export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>


            <MobileMenuPopup isOpen={true}>
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
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #1F1F1F;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: inline-flex;
        gap: 54px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`



const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 5px;
        background-color: ${theme.colors.accentBg};
        position: absolute;
        top: 32px;
        left: 15px;
        bottom: 111px;
        
        ${props => props.isOpen && css<{isOpen: boolean}> `
            background-color: rgba(0, 196, 240, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 5px;
            background-color: ${theme.colors.accentBg};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 5px;
            background-color: ${theme.colors.accentBg};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
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