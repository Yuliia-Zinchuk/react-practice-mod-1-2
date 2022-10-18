import styled from "styled-components";

export const Span = styled.span`
  color: ${({ isOrange }) => (isOrange ? "orange" : "blue")};
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: tomato;
  &:hover {
    background-color: #fff;
  }
  &:hover ${Span} {
    background-color: green;
  }
`;
