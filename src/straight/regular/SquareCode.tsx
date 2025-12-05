import React from 'react';
import type { IconProps } from '../../types';

export const SquareCode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.119,16.705l-1.414-1.414,3.299-3.299-3.299-3.283,1.414-1.414,3.299,3.298c.376,.375,.583,.875,.583,1.406s-.207,1.031-.583,1.407l-3.299,3.298Zm-4.824-1.414l-3.299-3.283,3.299-3.298-1.414-1.414-3.299,3.298c-.376,.375-.583,.875-.583,1.407s.207,1.031,.583,1.406l3.299,3.299,1.414-1.414ZM24,3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V24H24V3ZM2,3c0-.551,.448-1,1-1H21c.552,0,1,.449,1,1V22H2V3Z"/></svg>
);

SquareCode.displayName = 'SquareCode';
