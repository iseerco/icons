import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWaterBottle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,7.386a3.516,3.516,0,0,0-2.271-3.277L16,3.46V3h1V0H7V3H8v.46l-1.729.649A3.516,3.516,0,0,0,4,7.386V8.5a3.48,3.48,0,0,0,.635,2A3.48,3.48,0,0,0,4,12.5v2a3.48,3.48,0,0,0,.635,2A3.48,3.48,0,0,0,4,18.5V24H20V18.5a3.48,3.48,0,0,0-.635-2,3.48,3.48,0,0,0,.635-2v-2a3.48,3.48,0,0,0-.635-2A3.48,3.48,0,0,0,20,8.5Zm-13,0a.505.505,0,0,1,.324-.469L11,5.54V3h2V5.54l3.675,1.377A.5.5,0,0,1,17,7.386V8.5a.5.5,0,0,1-.5.5h-9A.5.5,0,0,1,7,8.5ZM17,12.5v2a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h9A.5.5,0,0,1,17,12.5ZM17,21H7V18.5a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Z"/></svg>
);

FiBsWaterBottle.displayName = 'FiBsWaterBottle';
