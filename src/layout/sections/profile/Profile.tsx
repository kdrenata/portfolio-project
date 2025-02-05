import styled from "styled-components";
import styledOne from '../../../assets/images/photo1_1.webp';
import styledTwo from '../../../assets/images/photo2.webp';
import styledTree from '../../../assets/images/photo3_1.webp';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {useResize} from "../../../hooks/useResize.tsx";



export const Profile = () => {
    const windowSize = useResize();
    const tabletSize = 768;

    return (
        <StyledProfile id={'profile'}>
            <Container>
                <FlexWrapper>
                    <ProfileWrapper>
                        <StyledLeft>
                            <BorderPhoto right={'47px'}>
                                <StyledOne src={styledOne} alt=''/>
                            </BorderPhoto>

                            <BorderPhoto right={'35px'}
                                         bottom={windowSize.width > tabletSize ? '-43px' : '0'}
                                         top={windowSize.width > tabletSize ? '44px' : '-44px'}>
                                <StyledTwo src={styledTwo} alt=''/>
                            </BorderPhoto>
                        </StyledLeft>

                        <StyledCenter>
                            <SectionTitle>About me</SectionTitle>
                            <StyledText>Hi everyone! My name is Renata, and I’m a frontend developer from Belgrade, Serbia. Ever since I was a child, I’ve loved creativity and have always been passionate about building something beautiful, functional, and inspiring.
                                Why did I choose programming? It’s simple — this field combines creativity and cutting-edge technology while offering endless opportunities for growth. I also dream of traveling the world, and being a developer allows me to work from anywhere while constantly learning and creating innovative solutions.
                                I specialize in frontend development and learning design, with a focus on creating unique and high-quality projects. I approach every task with responsibility and great attention to detail, ensuring I understand the client’s needs and audience to deliver the best results.
                                If you’re looking for someone who works with dedication, passion, and precision, I’d love to help bring your ideas to life. Feel free to reach out if you want to know more about me or are interested in my services. I look forward to working with you!</StyledText>
                        </StyledCenter>

                        <StyledRight>
                            <BorderPhoto left={'-95px'}>
                                <StyledTree src={styledTree} alt=''/>
                            </BorderPhoto>
                        </StyledRight>

                    </ProfileWrapper>
                </FlexWrapper>
            </Container>

        </StyledProfile>
    );
};
const StyledProfile = styled.section`
    padding: 100px 0 300px;
    position: relative;

    @media ${theme.media.tablet} {
        padding: 0 0 120px;
    }
    @media ${theme.media.mobile} {
        padding: 0 0 40px;
    }
`
const ProfileWrapper = styled.div`
    display: flex;
    position: relative;
    right: -5%;

    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        right: 0;
    }

    @media ${theme.media.mobile} {
    }
`
const StyledLeft = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 8%;

    &::before {
        content: "";
        display: inline-block;
        width: 792px;
        height: 792px;
        position: absolute;
        top: 85px;
        right: -190px;
        //border-radius: 50%;
        border-radius: 792px;
        border: 89px solid #E4E4E4;
        box-shadow: 0 4px 70px 0 rgba(255, 255, 255, 0.25);
        
        @media ${theme.media.tablet} {
            display: none;
        }
    }
    
`
const StyledCenter = styled.div`
    //box-shadow: 0px 4px 6px 1px #2C2C2C;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    z-index: 1;
    
    &::after {
        content: "";
        display: inline-block;
        width: 356px;
        height: 356px;
        position: absolute;
        top: 48px;
        right: -256px;
        border-radius: 356px;
        border: 34px solid #E2A200;
        box-shadow: 0 4px 70px 0 rgba(226, 162, 0, 0.25);

        @media ${theme.media.tablet} {
            top: 117%;
            right: 47px;
        }
        
        @media ${theme.media.mobile} {
            top: 105%;
            //bottom: -32%;
            right: -22%;
            
        }
        
    }
`
const StyledRight = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 4%;
    
    &::after {
        content: "";
        display: inline-block;
        width: 486px;
        height: 486px;
        position: absolute;
        top: 600px;
        right: 110px;
        //border-radius: 50%;
        border-radius: 486px;
        border: 55px solid #00C4F0;
        box-shadow: 0 4px 70px 0 rgba(0, 193, 236, 0.25);

        @media ${theme.media.tablet} {
            display: none;
        }
    }
`
const BorderPhoto = styled.div<{right?: string, left?: string, bottom?: string, top?: string }>`
    right: ${props => props.right || 'auto'};
    left: ${props => props.left || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    top: ${props => props.top || 'auto'};
    padding: 29px;
    border-radius: 14px;
    background-color: #2C2C2C;
    box-shadow: 1px 4px 6px 5px #2C2C2C;
    position: relative;
    z-index: 3;

    @media ${theme.media.tablet} {
        &:first-of-type {
            display: none;
        }
    }
    @media ${theme.media.mobile} {
        &:nth-of-type(2) {
            box-shadow: none;
        }
    }
`

const SectionTitle = styled.h2`
    font-size: 45px;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    bottom: -55px;
    z-index: 2;
    padding-left: 63px;
    //opacity: 0.7;
    
    @media ${theme.media.mobile} {
        padding-left: 16px;
    }
    
`
const StyledText = styled.p`
    display: flex;
    background-color: #2C2C2C;
    box-shadow: 1px 4px 6px 5px #2C2C2C;
    border-radius: 14px;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.2px;
    padding: 63px;
    min-height: 800px;
    font-size: 17px;
    position: relative;
    z-index: 1;

    @media ${theme.media.tablet} {
        min-height: auto;
    }
    @media ${theme.media.mobile} {
        min-width: 344px;
        padding: 60px 16px;
    }
`
const StyledOne= styled.img`
    width: 272px;
    height: 320px;
    object-fit: cover;
    box-shadow: 0 0 0 6px #686868;

    @media ${theme.media.tablet} {
        display: none;
    }

`
const StyledTwo = styled.img`
    width: 250px;
    height: 325px;
    object-fit: cover;
    box-shadow: 0 0 0 6px #686868;
    
    
`
const StyledTree = styled.img`
    width: 287px;
    height: 427px;
    object-fit: cover;
    box-shadow: 0 0 0 6px #686868;

    @media ${theme.media.tablet} {
        display: none;
    }
    
`