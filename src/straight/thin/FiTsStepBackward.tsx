import React from 'react';
import type { IconProps } from '../../types';

export const FiTsStepBackward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,.066L4,11.399V0h-1v24h1v-11.399l17,11.333V.066Zm-1,22L4.901,12,20,1.934v20.132Z"/></svg>
);

FiTsStepBackward.displayName = 'FiTsStepBackward';
