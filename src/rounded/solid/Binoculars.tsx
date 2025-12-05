import React from 'react';
import type { IconProps } from '../../types';

export const Binoculars: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,18.5c0,3.033-2.467,5.5-5.5,5.5s-5.5-2.467-5.5-5.5,2.467-5.5,5.5-5.5,5.5,2.467,5.5,5.5ZM5.5,13c-3.033,0-5.5,2.467-5.5,5.5s2.467,5.5,5.5,5.5,5.5-2.467,5.5-5.5-2.467-5.5-5.5-5.5ZM20,4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5v1.5h5Zm-1,2H5C2.239,6,0,8.239,0,11v2.418c1.371-1.483,3.326-2.418,5.5-2.418s4.129,.935,5.5,2.418v-3.418c0-.551,.449-1,1-1s1,.449,1,1v3.418c1.371-1.483,3.326-2.418,5.5-2.418s4.129,.935,5.5,2.418v-2.418c0-2.761-2.239-5-5-5Zm-10-2v-1.5c0-1.381-1.119-2.5-2.5-2.5h-.008c-1.381,0-2.514,1.13-2.518,2.51l-.004,1.49h5.03Z"/></svg>
);

Binoculars.displayName = 'Binoculars';
