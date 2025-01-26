import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

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
    box-shadow: 0px 4px 6px 1px #2C2C2C;
`
const SkillTitle = styled.h3`
    margin: 50px 0 0 0;
`