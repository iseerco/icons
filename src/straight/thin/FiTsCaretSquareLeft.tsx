import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCaretSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm2,18.125l-6.392-5.775c-.385-.341-.608-.834-.608-1.351s.223-1.01,.611-1.354l6.389-5.771v14.251Zm-1-12l-4.722,4.266c-.18,.16-.278,.375-.278,.608s.098,.449,.274,.605l4.726,4.27V7.125Z"/></svg>
);

FiTsCaretSquareLeft.displayName = 'FiTsCaretSquareLeft';
