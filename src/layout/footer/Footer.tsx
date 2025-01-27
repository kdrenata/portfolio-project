import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const footerItems = ['Home', 'About me', 'Portfolio', 'Contact']

export const Footer = () => {
    return (
        <StyledFooter id={'footer'}>
            <Container>
                <StyledMenuWrapper>
                    <StyledFooterMenu>
                        <Menu menuItems={footerItems}/>
                    </StyledFooterMenu>
                    <StyledContacts>
                        <Contact>Contact:</Contact>
                        <p>Email: <a href="mailto:kd.renata09@gmail.com" target="_blank">kd.renata09@gmail.com</a></p>
                        <p>Inst: <a href="https://www.instagram.com/m_and_r__" target="_blank"></a>m_and_r__</p>
                        <p>Calls: <a href="tel:+381 62 192 8636" target="_blank"></a>+381 62 192 8636</p>
                    </StyledContacts>
                    <SocialLink>
                        <FlexWrapper justify={'space-between'} style={{width:'100%'}} align={'center'}>
                            <Icon iconId={'code'}/>
                            <Btn>
                                <Icon iconId={'arrow-top'} width={'36'} height={'36'} viewBox={'0 0 36 36'}/>
                            </Btn>
                        </FlexWrapper>
                        <Copyright>Copyright © 2025 Renata Kudinova</Copyright>
                    </SocialLink>
                </StyledMenuWrapper>
            </Container>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    font-size: 14px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    position: relative;
    
`
const StyledMenuWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px 0;
`

const StyledFooterMenu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 18px;
    opacity: 0.5;
    
`
const StyledContacts = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 18px;
    opacity: 0.3;
    cursor: pointer;
`
const Contact = styled.h3`
    font-weight: 300;
    font-size: 14px;
`
const SocialLink = styled.a`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`

const Copyright = styled.small`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    opacity: 0.3;
    
`
const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
    border-radius: 50%;
    width: 60px;
    height: 60px;
`
