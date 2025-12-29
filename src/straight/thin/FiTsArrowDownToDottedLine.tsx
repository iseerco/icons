import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowDownToDottedLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7,23c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1Zm-5-1c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm8,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm8,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm4,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm-8,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm4.56-7.94l-.71-.71-5.35,5.35V0h-1V18.71l-5.35-5.35-.71,.71,5.5,5.5c.29,.29,.68,.44,1.06,.44s.77-.15,1.06-.44l5.5-5.5Z"/></svg>
);

FiTsArrowDownToDottedLine.displayName = 'FiTsArrowDownToDottedLine';
