import styled from "styled-components";
import photo from '../../../assets/images/Iam.webp'
import ellipse from '../../../assets/images/ellipse.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

import {Circle} from "../../../components/circle/Circle.tsx";
import {font} from "../../../styles/Common.tsx";
import {useResize} from "../../../hooks/useResize.tsx";

export const Main = () => {
    const windowSize = useResize();
    const mobileSize = 567;
    // const tabletSize = 768;

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
                        <WrapperAvatar>
                            <Avatar src={photo} alt=''/>
                        </WrapperAvatar>
                        <MainEllipse src={ellipse} alt=''/>

                        <Circle src={'reactGray'} top={windowSize.width > mobileSize ? '18%' : '12%'} left={'9%'} />
                        <Circle src={'htmlGray'} top={windowSize.width > mobileSize ? '43%' : '40%'} left={windowSize.width > mobileSize ? '-4%' : '-5%'}/>
                        <Circle src={'cssGray'} top={windowSize.width > mobileSize ? '70%' : '70%'} left={windowSize.width > mobileSize ? '0.5%' : '1%'}/>
                        <Circle src={'figmaGray'} top={windowSize.width > mobileSize ? '14%' : '10%' } right={windowSize.width > mobileSize ? '15%' : '14%'}/>
                    </WrapperImage>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 788px;
    background-color: ${theme.colors.secondaryBg};
    display: flex;
    justify-content: space-between;
    
    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
`
const WrapperBlock = styled.div`
    margin-top: 100px;
    max-width: 448px;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 27px;
    //border: 1px solid red;
    
    
`
const Text = styled.span`
    ${font({weight: 600, Fmax: 48, Fmin: 27})}
    text-transform: uppercase;
    //font-size: 48px;
    //font-weight: 600;
    line-height: 0.5;
    //opacity: 0.8;
`
const Name = styled.span`
    ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 72, Fmin: 52})}
    //font-family: 'Poppins', sans-serif;
    //font-size: 72px;
    //font-weight: 700;
    margin: 10px 0;
    //letter-spacing: 0.05em;
    display: flex;
    line-height: 1;
    text-transform: uppercase;
    //opacity: 0.8;
    
    @media ${theme.media.mobile} {
        margin: 12px 0 12px;
    }
`
const StyledText = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //opacity: 0.8;
`
const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
    //font-weight: 400;
    //font-size: 27px;
    text-transform: uppercase;
    line-height: 1;
    //opacity: 0.8;
`

const WrapperImage = styled.div`
    width: 632px;
    height: 676px;
    //margin-top: 30px;
    bottom: -100px;
    align-self: flex-end;
    position: relative;
    left: 80px;
    //border: 1px solid red;

    @media ${theme.media.mobile} {
        width: 346px;
        height: 363px;
        left: auto;
    }
`
const WrapperAvatar = styled.div`
    &::after {
        content: "";
        display: inline-block;
        width: 575px;
        height: 575px;
        position: absolute;
        top: 79px;
        right: 35px;
        //border-radius: 50%;
        border-radius: 575px;
        border: 67px solid #00C4F0;
        box-shadow: 0 0 152px 0 rgba(0, 196, 240, 0.42);
        
        @media ${theme.media.mobile} {
            width: 315px;
            height: 315px;
            border-radius: 50%;
            border: 40px solid #00C4F0;
            top: 10%;
            right: 5%;
        }
    }
`
const Avatar = styled.img`
    width: 466px;
    height: 674px;
    //height: 100%;
    flex-shrink: 0;
    object-fit: cover;
    
    position: relative;
    z-index: 1;
    
    @media ${theme.media.mobile} {
        width: 255px;
        height: 363px;
    }
    
`
const MainEllipse = styled.img`
    object-fit: cover;
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    
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

