import React from 'react';
import type { IconProps } from '../../types';

export const MobileNotch: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.6,.036l-.706,1.411c-.169,.339-.516,.553-.895,.553h-4c-.379,0-.725-.214-.895-.553L8.4,.036c-2.475,.297-4.4,2.41-4.4,4.964v14c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V5C20,2.446,18.075,.334,15.6,.036Zm-2.6,20.964h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>
);

MobileNotch.displayName = 'MobileNotch';
