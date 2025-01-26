
import styled from "styled-components";
import styledOne from '../../../assets/images/photo1_1.webp';
import styledTwo from '../../../assets/images/photo2.webp';
import styledTree from '../../../assets/images/photo3_1.webp';
import ellipseWhite from '../../../assets/images/ellipse-white.webp';
import ellipseYellow from '../../../assets/images/ellipse-yellow.webp';
import ellipseBlue from '../../../assets/images/ellipse-blue.webp';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";



export const Profile = () => {
    return (
        <StyledProfile id={'profile'}>
            <Container>
                <FlexWrapper>
                    <ProfileWrapper>
                        <StyledLeft>
                            <BorderPhoto right={'-23px'}>
                                <StyledOne src={styledOne} alt=''/>
                            </BorderPhoto>
                            <EllipseWhite src={ellipseWhite} alt=''/>
                            <BorderPhoto right={'-23px'} bottom={'-45px'}>
                                <StyledTwo src={styledTwo} alt=''/>
                            </BorderPhoto>
                        </StyledLeft>

                        <StyledCenter>
                            <SectionTitle>About me</SectionTitle>
                            <StyledText>Hi everyone! My name is Renata, and I’m a frontend developer from Belgrade, Serbia. Ever since I was a child, I’ve loved creativity and have always been passionate about building something beautiful, functional, and inspiring.
                                Why did I choose programming? It’s simple — this field combines creativity and cutting-edge technology while offering endless opportunities for growth. I also dream of traveling the world, and being a developer allows me to work from anywhere while constantly learning and creating innovative solutions.
                                I specialize in frontend development and learning design, with a focus on creating unique and high-quality projects. I approach every task with responsibility and great attention to detail, ensuring I understand the client’s needs and audience to deliver the best results.
                                If you’re looking for someone who works with dedication, passion, and precision, I’d love to help bring your ideas to life. Feel free to reach out if you want to know more about me or are interested in my services. I look forward to working with you!</StyledText>
                            <EllipseYellow src={ellipseYellow} alt=''/>
                        </StyledCenter>

                        <StyledRight>
                            <BorderPhoto left={'-23px'}>
                                <StyledTree src={styledTree} alt=''/>
                            </BorderPhoto>
                            <EllipseBlue src={ellipseBlue} alt=''/>
                        </StyledRight>
                    </ProfileWrapper>
                </FlexWrapper>
            </Container>

        </StyledProfile>
    );
};
const StyledProfile = styled.section`
    min-height: 80vh;
    position: relative;
`
const ProfileWrapper = styled.div`
    display: flex;
`
const StyledLeft = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 8%;
`
const StyledCenter = styled.div`
    //box-shadow: 0px 4px 6px 1px #2C2C2C;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    left: 6%;
    z-index: 1;
`
const StyledRight = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 4%;
`
const BorderPhoto = styled.div<{right?: string, left?: string, bottom?: string }>`
    right: ${props => props.right || 'auto'};
    left: ${props => props.left || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    padding: 25px;
    border-radius: 14px;
    background-color: #2C2C2C;
    box-shadow: 1px 4px 6px 1px #2C2C2C;
    position: relative;
    z-index: 3;
`

const SectionTitle = styled.h2`
    font-size: 45px;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    bottom: -55px;
    z-index: 2;
    padding-left: 63px;
    opacity: 0.7;
`
const StyledText = styled.p`
    display: flex;
    background-color: #2C2C2C;
    box-shadow: 0px 4px 6px 1px #2C2C2C;
    border-radius: 14px;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.2px;
    padding: 63px;
    min-height: 800px;
    font-size: 17px;
    position: relative;
    z-index: 1;
`
const StyledOne= styled.img`
    width: 272px;
    height: 320px;
    object-fit: cover;
    box-shadow: 0px 0px 0px 6px #686868;
`
const StyledTwo = styled.img`
    width: 250px;
    height: 325px;
    object-fit: cover;
    box-shadow: 0px 0px 0px 6px #686868;
    
`
const StyledTree = styled.img`
    width: 287px;
    height: 427px;
    object-fit: cover;
    box-shadow: 0px 0px 0px 6px #686868;
    
`
const EllipseWhite = styled.img`
    width: 800px;
    object-fit: cover;
    position: absolute;
    left: -72%;
    top: 67px;
`
const EllipseYellow = styled.img`
    width: 480px;
    position: absolute;
    right: -71%;
    top: -4%;
    
`
const EllipseBlue = styled.img`
    width: 650px;
    position: absolute;
    bottom: -180px;
    top: 53%;
    right: -7%;
`