import React from 'react';
import type { IconProps } from '../../types';

export const Projector: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="13" width={size} height={size}/><path d="M14,6c-2.414,0-4.434,1.721-4.899,4-.066,.323-.101,.658-.101,1,0,2.757,2.243,5,5,5s5-2.243,5-5c0-.342-.035-.677-.101-1-.465-2.279-2.484-4-4.899-4Z"/><rect x="17" y="2.34" width={size} height={size} transform="translate(6.609 18.126) rotate(-60.005)"/><path d="M21,10h-.08c.047,.328,.08,.66,.08,1,0,3.859-3.141,7-7,7s-7-3.141-7-7c0-.34,.033-.672,.08-1H3c-1.654,0-3,1.346-3,3v9H3v2h2v-2h14v2h2v-2h3V13c0-1.654-1.346-3-3-3ZM3.5,15c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"/><rect x="8" y="1.34" width={size} height={size} transform="translate(-.464 4.947) rotate(-29.995)"/></svg>
);

Projector.displayName = 'Projector';
