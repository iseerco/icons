import React from 'react';
import type { IconProps } from '../../types';

export const PoliceBox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m3.112,5c.308-1.156,1.281-2.057,2.516-2.211l5.372-.672V0h2v2.117l5.372.672c1.235.154,2.208,1.055,2.516,2.211H3.112Zm19.888,17v2H1v-2h2V7h18v15h2ZM5,12h2v-3h-2v3Zm4,2h-4v4h4v-4Zm2-5h-2v3h2v-3Zm4,0h-2v3h2v-3Zm4,0h-2v3h2v-3Z"/></svg>
);

PoliceBox.displayName = 'PoliceBox';
