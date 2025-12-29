import React from 'react';
import type { IconProps } from '../../types';

export const StarChristmas: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17.185,14.822l6.854-2.822-6.854-2.822,4.815-7.178-7.178,4.815L12-.038l-2.798,6.796L2,2l4.758,7.202L-.039,12l6.854,2.822-4.815,7.178,7.178-4.815,2.822,6.853,2.822-6.853,7.178,4.815-4.815-7.178Zm-7.165-.843l-4.806-1.979,4.806-1.979,1.979-4.806,1.979,4.806,4.806,1.979-4.806,1.979-1.979,4.806-1.979-4.806Z"/></svg>
);

StarChristmas.displayName = 'StarChristmas';
