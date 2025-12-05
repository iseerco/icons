import React from 'react';
import type { IconProps } from '../../types';

export const BarcodeScan: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2,14h2v9H2V14Zm15,9h2V14h-2v9Zm-8,0h2V14h-2v9Zm-4,0h3V14h-3v9Zm8,0h3V14h-3v9Zm7,0h2V14h-2v9Zm2-13V1h-2V10h-1V1h-2V10h-1V1h-3V10h-2V1h-2V10h-1V1h-3V10h-1V1H2V10H0v2H24v-2h-2Z"/></svg>
);

BarcodeScan.displayName = 'BarcodeScan';
