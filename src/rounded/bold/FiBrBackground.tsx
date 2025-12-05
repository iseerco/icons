import React from 'react';
import type { IconProps } from '../../types';

export const FiBrBackground: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,0H5.5C2.47,0,0,2.47,0,5.5v13c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V5.5c0-3.03-2.47-5.5-5.5-5.5Zm.35,3.03L3.03,18.85c-.02-.12-.03-.23-.03-.35v-4.88s.04-.04,.06-.06c0,0,10.54-10.54,10.56-10.56h4.88c.12,0,.24,0,.35,.03Zm-13.35-.03h3.88L3,9.38v-3.88c0-1.38,1.12-2.5,2.5-2.5Zm-.35,17.97L20.97,5.15c.02,.12,.03,.23,.03,.35v4.88s-.04,.04-.06,.06c0,0-10.54,10.54-10.56,10.56H5.5c-.12,0-.24,0-.35-.03Zm13.35,.03h-3.88l6.38-6.38v3.88c0,1.38-1.12,2.5-2.5,2.5Z"/></svg>
);

FiBrBackground.displayName = 'FiBrBackground';
