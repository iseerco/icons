import React from 'react';
import type { IconProps } from '../../types';

export const PersonDressSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm5.5,17.5v4h-2v-4h-2v4h-2v-4h-2.133l1.422-11.372c.187-1.498,1.467-2.628,2.977-2.628h1.469c1.51,0,2.79,1.13,2.977,2.628l1.422,11.372h-2.133Zm-5.867-2h5.734l-1.141-9.124c-.062-.5-.489-.876-.992-.876h-1.469c-.503,0-.93,.376-.992,.876l-1.141,9.124Z"/></svg>
);

PersonDressSimple.displayName = 'PersonDressSimple';
