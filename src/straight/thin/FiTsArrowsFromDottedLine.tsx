import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowsFromDottedLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,13c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm-8-2c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm5,1c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm-9-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm20,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-4,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1ZM10.819,.489l-3.792,3.792,.707,.707,3.766-3.766v7.777h1V1.223l3.766,3.766,.707-.707L13.181,.489c-.65-.651-1.711-.651-2.361,0Zm1.681,22.288v-7.777h-1v7.777l-3.766-3.766-.707,.707,3.792,3.792c.325,.326,.753,.488,1.181,.488s.855-.163,1.181-.488l3.792-3.792-.707-.707-3.766,3.766Z"/></svg>
);

FiTsArrowsFromDottedLine.displayName = 'FiTsArrowsFromDottedLine';
