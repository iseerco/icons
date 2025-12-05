import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquareS: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v17.5Zm-6-12v-.093c0-.5-.407-.907-.907-.907h-4.189c-.498,0-.903.405-.903.903,0,.402.271.76.657.87l5.51,1.562c1.67.481,2.833,2.025,2.833,3.757,0,2.154-1.753,3.907-3.907,3.907h-4.186c-2.154,0-3.907-1.753-3.907-3.907l3-.093c0,.593.407,1,.907,1h4.186c.5,0,.907-.407.907-.907,0-.402-.27-.761-.657-.872l-5.505-1.562c-1.671-.476-2.838-2.02-2.838-3.756,0-2.152,1.751-3.903,3.903-3.903h4.189c2.154,0,3.907,1.753,3.907,3.907l-3,.093Z"/></svg>
);

FiBsSquareS.displayName = 'FiBsSquareS';
