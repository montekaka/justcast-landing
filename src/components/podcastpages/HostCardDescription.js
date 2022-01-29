import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;    
`  

export default function HostCardDescription({text}) {

  return <Description>{text}</Description>;
}
