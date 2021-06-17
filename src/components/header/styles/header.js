import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Background = styled.div`

  display: flex;
  flex-direction: column;
  background: clear top left / cover 
    no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }    
    `;

export const Frame = styled.div`
    
    `;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
    
    `;

// this is an element from ReactRouter and we're applying styling to that link
export const Logo = styled.img ` 

  height: 80px;
  width: 140px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }    
    `;
export const ButtonLink = styled(ReactRouterLink)`

  display: block;
  background-color: #76323F;
  width: 55px;
  height: fit-content;
  color: #D7CEC7;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }>>   
    `;
