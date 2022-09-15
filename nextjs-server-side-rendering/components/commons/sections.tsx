import React from "react";
import styled from "styled-components";

const Box = styled.section`
  padding: 25px 0px;
`;

type SectionType = {
  children: React.ReactNode;
  bg?: string;
};

export const Section = ({ children }: SectionType) => {
  return <Box>{children}</Box>;
};
