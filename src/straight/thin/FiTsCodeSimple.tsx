import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCodeSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.579,21.422L.622,13.465c-.378-.378-.586-.88-.586-1.415s.208-1.037,.586-1.414L8.629,2.629l.707,.707L1.329,11.343c-.189,.189-.293,.44-.293,.707s.104,.519,.293,.708l7.957,7.957-.707,.707Zm14.8-7.957c.378-.378,.586-.88,.586-1.415s-.208-1.037-.586-1.414L15.371,2.629l-.707,.707,8.007,8.007c.189,.189,.293,.44,.293,.707s-.104,.519-.293,.708l-7.957,7.957,.707,.707,7.957-7.957Z"/></svg>
);

FiTsCodeSimple.displayName = 'FiTsCodeSimple';
