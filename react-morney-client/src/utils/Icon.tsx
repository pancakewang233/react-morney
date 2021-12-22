import styled from 'styled-components';
import React from 'react';

const Svg = styled.svg`
  width: 1em; 
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`

type Props ={
  name: String
}
const Icon:React.FC<Props> = (props)=>{
  return (
    <Svg aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`}/>
    </Svg>
  )
}

export default Icon
