import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 60px;
  font-weight: bold;
`;

type TitleType = {
  title: string;
};

export const Title = ({ title }: TitleType) => {
  return <H2>{title}</H2>;
};
