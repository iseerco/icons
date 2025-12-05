import React from 'react';
import type { IconProps } from '../../types';

export const FiBrDiceD4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.218,12.606S15.422,1.656,15.4,1.634a4.361,4.361,0,0,0-6.86.068L.768,12.627a4.342,4.342,0,0,0,1.024,6c.032.022,7.415,4.583,7.415,4.583a5.289,5.289,0,0,0,5.587,0s7.382-4.561,7.414-4.583A4.348,4.348,0,0,0,23.218,12.606Zm-19.7,3.566a1.351,1.351,0,0,1-.3-1.825L10.5,4.124V20.48Zm16.956,0L13.5,20.48V4.128l7.26,10.2A1.357,1.357,0,0,1,20.478,16.172Z"/></svg>
);

FiBrDiceD4.displayName = 'FiBrDiceD4';
