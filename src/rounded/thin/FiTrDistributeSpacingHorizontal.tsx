import React from 'react';
import type { IconProps } from '../../types';

export const FiTrDistributeSpacingHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,24c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V23.5c0,.28-.22,.5-.5,.5Zm-18.5-.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5V23.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5Zm14-7V7.5c0-1.93-1.57-3.5-3.5-3.5h-2.5c-1.93,0-3.5,1.57-3.5,3.5v9c0,1.93,1.57,3.5,3.5,3.5h2.5c1.93,0,3.5-1.57,3.5-3.5Zm-3.5-11.5c1.38,0,2.5,1.12,2.5,2.5v9c0,1.38-1.12,2.5-2.5,2.5h-2.5c-1.38,0-2.5-1.12-2.5-2.5V7.5c0-1.38,1.12-2.5,2.5-2.5h2.5Z"/></svg>
);

FiTrDistributeSpacingHorizontal.displayName = 'FiTrDistributeSpacingHorizontal';
