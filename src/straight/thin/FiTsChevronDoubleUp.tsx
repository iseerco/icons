import React from 'react';
import type { IconProps } from '../../types';

export const FiTsChevronDoubleUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.181,12.974L12.354,2.146c-.189-.189-.518-.189-.707,0L.819,12.974l-.707-.707L10.939,1.439c.566-.566,1.555-.566,2.121,0l10.827,10.827-.707,.707Zm.707,8.673L12.471,10.229c-.26-.26-.682-.26-.941,0L.112,21.646l.707,.707L12,11.173l11.181,11.181,.707-.707Z"/></svg>
);

FiTsChevronDoubleUp.displayName = 'FiTsChevronDoubleUp';
