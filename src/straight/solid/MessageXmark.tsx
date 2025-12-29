import React from 'react';
import type { IconProps } from '../../types';

export const MessageXmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,0H3C1.346,0,0,1.346,0,3v17h6.923l3.748,3.157c.382.339.862.507,1.337.507.467,0,.931-.162,1.293-.484l3.847-3.18h6.852V3c0-1.654-1.346-3-3-3Zm-4.519,13.093l-1.414,1.414-3.093-3.093-3.093,3.093-1.414-1.414,3.093-3.093-3.093-3.093,1.414-1.414,3.093,3.093,3.093-3.093,1.414,1.414-3.093,3.093,3.093,3.093Z"/></svg>
);

MessageXmark.displayName = 'MessageXmark';
