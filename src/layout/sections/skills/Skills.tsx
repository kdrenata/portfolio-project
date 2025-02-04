import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'html'} title={'HTML5'} width={'82'} height={'95'} viewBox={'0 0 120 120'}/>
                    <Skill iconId={'css'} title={'CSS'} width={'82'} height={'95'} viewBox={'0 0 120 120'}/>
                    <Skill iconId={'figma'} title={'Web Design'} width={'80'} height={'92'} viewBox={'0 -9 59 105'}/>
                    <Skill iconId={'js'} title={'Java Script'} width={'82'} height={'95'} viewBox={'0 0 120 120'}/>
                    <Skill iconId={'react'} title={'React'} width={'82'} height={'95'} viewBox={"0 0 113 101"}/>
                    <Skill iconId={'vscode'} title={'vscode'} width={'82'} height={'95'} viewBox={'0 0 112 112'}/>
                    <Skill iconId={'github'} title={'Github'} width={'82'} height={'95'} viewBox={'0 0 90 90'} />
                    <Skill iconId={'typeScript'} title={'Type Script'} width={'87'} height={'92'} viewBox={'0 0 50 49'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
    background-color: ${theme.colors.secondaryBg};
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accentBg};
    position: relative;
    
    ${FlexWrapper} {
        @media ${theme.media.tablet} {
            justify-content: center;
            column-gap: 50px;
        }
    }
    
`