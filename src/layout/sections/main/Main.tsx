
import styled from "styled-components";
import photo from '../../../assets/images/Iam.webp'
import ellipse from '../../../assets/images/ellipse.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <WrapperBlock>
                        <Text>Hello</Text>
                        <Name>I’m Renata Kudinova</Name>
                        <StyledText>I've been doing front-end development for a year now. Do you need a turnkey website? Then contact me</StyledText>
                        <MainTitle>A Web Developer</MainTitle>
                        <StyledBtn>contact me</StyledBtn>
                    </WrapperBlock>
                    <WrapperImage>
                        <Avatar src={photo} alt=''/>
                        <MainEllipse src={ellipse} alt=''/>
                    </WrapperImage>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 50vh;
    background-color: ${theme.colors.secondaryBg};
    display: flex;
    justify-content: space-between;
`
const WrapperBlock = styled.div`
    width: 447px;
    height: 377px;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 10px;
    
    
`
const Text = styled.span`
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 600;
    opacity: 0.7;
`
const Name = styled.span`
    display: flex;
    font-size: 72px;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.7;
`
const StyledText = styled.p`
    min-width: 430px;
    height: 74px;
    font-size: 16px;
    font-weight: 300;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0.7;
`
const MainTitle = styled.h1`
    text-transform: uppercase;
    opacity: 0.7;
`

const WrapperImage = styled.div`
    position: relative;
`

const Avatar = styled.img`
    width: 400px;
    height: 545px;
    object-fit: cover;
    position: relative;
    bottom: 10%;
    right: -3%;
    z-index: 1;
`

const MainEllipse = styled.img`
    position: absolute;
    top: -15%;
    right: -42%;
    width: 750px;
`
const StyledBtn = styled.button`
    width: 200px;
    height: 47px;
    font-size: 15px;
    font-weight: 400;
    flex-shrink: 0;
    border-radius: 6px;
    background: linear-gradient(87deg, #00C4F0 4.47%, #00C4F0 95.53%);
    box-shadow: 0px 2px 13px 0px rgba(43, 184, 209, 0.48);
    text-transform: uppercase;
    color: #3a2b2b;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(8, 9, 11, 0.8);
    }

    &:active {
        transform: scale(0.95);
    }

`

