import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
    viewBox?: string;
    width?: string;
    height?: string;
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt='Work'/>
            <WrapperWork>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <FlexWrapper justify={'center'} align={'center'}  style={{height: 'unset'}}>
                    <Link href={'#'}>More</Link>
                    <Icon iconId={'arrow'} width={'14'} height={'10'} viewBox={'0 0 14 10'} />
                </FlexWrapper>
            </WrapperWork>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    max-width: 970px;
    background-color: rgb(50,49,49);
    box-shadow: 0px 4px 6px 1px rgb(30, 30, 30);
    border-radius: 29px;
    width: 970px;
    min-height: 600px;
    margin: 50px;
    display: flex;
    
    @media ${theme.media.tablet} {
        flex-wrap: wrap;
        justify-content: center;
    }
   

`
const Image = styled.img`
    object-fit: cover;
    border-radius: 29px;
    margin: 50px;
`
const WrapperWork = styled.div`
    color: ${theme.colors.font};
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    
`
const Title = styled.h3`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    opacity: 0.7;
    
`
const Text = styled.p`
    font-size: 15px;
    font-weight: 300;
    line-height: normal;
    text-align: center;
    opacity: 0.7;
`
const Link = styled.a`
    color: #1ab8e8;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    margin-right: 16px;
    
`
