import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAngleDoubleSmallDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,13.033c-.445,0-.864-.173-1.178-.488L4.951,6.674l2.121-2.121,4.928,4.928,4.928-4.928,2.121,2.121-5.87,5.871c-.315,.315-.733,.488-1.179,.488Zm1.725,6.278l5.345-5.344-2.121-2.121-4.991,4.991-4.896-4.896-2.121,2.121,5.25,5.25c.472,.472,1.1,.732,1.768,.732s1.296-.26,1.768-.732Z"/></svg>
);

FiBsAngleDoubleSmallDown.displayName = 'FiBsAngleDoubleSmallDown';
