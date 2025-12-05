import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPhoneOffice: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,2H8.662c-.563-1.181-1.769-2-3.162-2H3.5C1.57,0,0,1.57,0,3.5V24H24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.275,.225-.5,.5-.5h2c.275,0,.5,.225,.5,.5v12.5H3V3.5Zm0,17.5v-2h6V5h5v3h7v13H3ZM19,12.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm-5,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm5,5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm-5,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>
);

FiBsPhoneOffice.displayName = 'FiBsPhoneOffice';
