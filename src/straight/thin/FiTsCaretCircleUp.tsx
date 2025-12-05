import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCaretCircleUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm7.126,14H4.875l5.775-6.392c.682-.771,2.017-.774,2.704,.003l5.772,6.389Zm-12-1h9.749l-4.266-4.722c-.319-.36-.901-.357-1.213-.003l-4.27,4.726Z"/></svg>
);

FiTsCaretCircleUp.displayName = 'FiTsCaretCircleUp';
