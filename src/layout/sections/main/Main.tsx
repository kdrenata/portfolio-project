import styled from "styled-components";
import photo from '../../../assets/images/Iam.webp'
import ellipse from '../../../assets/images/ellipse.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

import {Circle} from "../../../components/circle/Circle.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
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

                        <Circle src={'reactGray'} top={'17%' } left={'9%'}/>
                        <Circle src={'htmlGray'} top={'41%' } left={'-4%'}/>
                        <Circle src={'cssGray'} top={'68%' } left={'1%'}/>
                        <Circle src={'figmaGray'} top={'14%' } right={'13%'}/>
                    </WrapperImage>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 780px;
    background-color: ${theme.colors.secondaryBg};
    display: flex;
    justify-content: space-between;
`
const WrapperBlock = styled.div`
    margin-top: 200px;
    max-width: 448px;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 27px;
    //border: 1px solid red;
    
`
const Text = styled.span`
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 600;
    line-height: 0.5;
    opacity: 0.7;
`
const Name = styled.span`
    display: flex;
    font-size: 72px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    opacity: 0.7;
`
const StyledText = styled.p`
    min-width: 430px;
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
    line-height: 1;
    opacity: 0.7;
`

const WrapperImage = styled.div`
    width: 632px;
    height: 674px;
    bottom: -100px;
    align-self: flex-end;
    position: relative;
    left: 80px;
    //border: 1px solid red;
`

const Avatar = styled.img`
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
    
    position: relative;
    z-index: 1;
`

const MainEllipse = styled.img`
    object-fit: cover;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StyledBtn = styled.button`
    width: 200px;
    height: 47px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    border-radius: 6px;
    //background: linear-gradient(87deg, #00C4F0 4.47%, #00C4F0 95.53%);
    //box-shadow: 0 2px 13px 0 rgba(43, 184, 209, 0.48);
    background: linear-gradient(87deg, #E2A300 4.47%, #E29500 95.53%);
    box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(248, 132, 14, 0.8);
    }

    &:active {
        transform: scale(0.95);
    }

`

