import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBarcodeScan: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2,14h1v9h-1V14Zm19,9h1V14h-1v9Zm-9,0h1V14h-1v9Zm-7,0h2V14h-2v9Zm3,0h2V14h-2v9Zm9,0h2V14h-2v9Zm-2,0h1V14h-1v9Zm7-12V1h-1V11h-2V1h-2V11h-1V1h-1V11h-2V1h-1V11h-2V1h-2V11h-1V1h-2V11H3V1h-1V11H0v1H24v-1h-2Z"/></svg>
);

FiTsBarcodeScan.displayName = 'FiTsBarcodeScan';
