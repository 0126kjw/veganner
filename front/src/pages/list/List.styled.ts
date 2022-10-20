import styled, { css } from "styled-components";

export const WholeLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ListTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 34px;
  text-align: center;
  letter-spacing: -1.2px;
  color: #004d43;
`;


export const ListText = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -1.2px;
  color: #212121;

`;

export const SearchWrapper = styled.form`
position:relative;
width:700px;
margin:0 auto;
`;


export const SearchForm = styled.form`
  text-align: center;
  position:relative;
  width: 550px;
  margin:0 auto;
  margin-bottom:8%
 
`;

export const SearchInput = styled.input`
width: 550px;
height: 50px;
border: 1px solid #000000;
border-radius:30px;

`;


export const SearchButton = styled.button`
position: absolute;
width: 50px;
height: 50px;
background: #212121;
border-radius:50%;
top: 4%;
right: -5px;
cursor:pointer

`;

export const CardLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 22%;
  height: 380px;
  margin: 0 auto;
  border: 0.5px solid rgba(33, 33, 33, 0.3);
  display: inline-block;
  margin-right: 2%;
  margin-top:2%
`;

export const CardHeader = styled.div`
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  border-bottom: 0.5px solid rgba(33, 33, 33, 0.3);
`;

export const CardHeaderProfile = styled.span`
  width: 30.37px;
  height: 30px;
  background: #a5a5a5;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 3%;
`;

export const CardHeaderText = styled.span`
  font-size: 12px;
  vertical-align: middle;
`;

export const CardHeaderImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardBottom = styled.div``;

export const CardBottomTitle = styled.div`
  font-size: 14px;
`;

export const CardBottomDate = styled.div`
  font-size: 12px;
  color: #8f8f8f;
`;
export const TabSection = styled.section`
  
width: 30%;
margin: 0 auto;
margin-top: 4%;
    margin-bottom: 3%;
}
`;



export const TabListGroup = styled.ul`
  display: flex;
  
  justify-content: space-evenly;
`;

export const TabList = styled.li<{ active?: boolean }>`
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  cursor:pointer;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 1px solid;
    `}
`;

export const WriteButton = styled.button`
  float: right;
`;


