import Img from "@/images/logo.svg";
import styled from "styled-components";
import React from 'react';
import Icon from '@/utils/Icon'

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  height: 16px;
  width: 16px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  title: String;
  name: String
};
const NavIcon: React.FC<Props> = (props) => {
  return (
    <IconWrapper>
      <Icon name={props.name} />
      <span>{props.title}</span>
    </IconWrapper>
  );
};

export { NavIcon };
