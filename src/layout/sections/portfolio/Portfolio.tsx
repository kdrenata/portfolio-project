import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {Work} from "./work/Work.tsx";
import landingImg from '../../../assets/images/landing-image.png'
import {theme} from "../../../styles/Theme.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Portfolio = () => {
    return (
        <StyledPortfolio id={'portfolio'}>
            <Container>
                <StyledPortfolioTitle>Portfolio</StyledPortfolioTitle>
                <FlexWrapper justify={'center'} position={'relative'}>
                    <Work title={'Landing Ice-cream'}
                          src={landingImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.'}/>
                    <WrapperCircle>
                        <Icon iconId={'circle'} width={'60'} height={'60'} viewBox={'0 0 60 60'}/>
                        <Icon iconId={'circle'} width={'60'} height={'60'} viewBox={'0 0 60 60'}/>
                    </WrapperCircle>
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    );
};
const StyledPortfolio = styled.section`
    background-color: ${theme.colors.secondaryBg};
    position: relative;
`
const StyledPortfolioTitle = styled.h2`
    font-size: 48px;
    font-weight: 400;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    opacity: 0.7;
    
`
const WrapperCircle = styled.div`
    flex-shrink: 0;
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    width: 100%;
`