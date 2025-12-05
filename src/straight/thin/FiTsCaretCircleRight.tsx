import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCaretCircleRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm-2,18.125V4.875l6.392,5.775c.385,.341,.608,.834,.608,1.351s-.224,1.01-.612,1.354l-6.388,5.771Zm1-12v9.749l4.722-4.266c.181-.16,.278-.375,.278-.608s-.098-.448-.274-.605l-4.726-4.27Z"/></svg>
);

FiTsCaretCircleRight.displayName = 'FiTsCaretCircleRight';
