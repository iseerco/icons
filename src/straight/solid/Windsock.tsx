import React from 'react';
import type { IconProps } from '../../types';

export const Windsock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6,4.294l3,.571V17.219l-3,.572Zm8,1.524-3-.572V16.838l3-.571Zm5,.952L16,6.2v9.687l3-.572ZM4,3.913l-1-.19A2,2,0,0,0,2,0,2,2,0,0,0,1,3.723V24H3V18.362l1-.19ZM21,7.151v7.783l3-.572V7.722Z"/></svg>
);

Windsock.displayName = 'Windsock';
