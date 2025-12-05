import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowAltRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.394,10.635l-6.394-5.85v6.715H0v1H17v6.715l6.392-5.848c.387-.348,.608-.846,.608-1.367s-.223-1.02-.606-1.365Zm-.672,1.989l-4.722,4.32V7.056l4.722,4.32c.18,.161,.278,.383,.278,.624s-.099,.463-.278,.624Z"/></svg>
);

FiTsArrowAltRight.displayName = 'FiTsArrowAltRight';
