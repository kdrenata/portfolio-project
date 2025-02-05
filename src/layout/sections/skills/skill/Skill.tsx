import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.tsx";

type SkillPropsType = {
    iconId: string;
    title: string;
    viewBox?: string;
    width?: string;
    height?: string;

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={props.iconId}
                      width={props.width || '80'}
                      height={props.height || '80'}
                      viewBox={props.viewBox || "0 0 100 100"}/>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    background-color: rgba(41, 39, 39, 0.93);
    width: 250px;
    height: 250px;
    padding: 50px;
    margin: 30px 0;
    border-radius: 25px;
    box-shadow: 0 4px 6px 1px #101010;

    @media ${theme.media.mobile} {
        width: 45%;
        height: fit-content;
        padding: 12px 16px;
    }

`
const SkillTitle = styled.h3`
    margin: 50px 0 0 0;
    
    @media ${theme.media.mobile} {
        margin: 16px 0 16px;
    }

`