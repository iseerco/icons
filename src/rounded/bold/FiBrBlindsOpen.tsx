import React from 'react';
import type { IconProps } from '../../types';

export const FiBrBlindsOpen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,7.5c0-.829,.672-1.5,1.5-1.5H15.5c.828,0,1.5,.671,1.5,1.5s-.672,1.5-1.5,1.5H1.5c-.828,0-1.5-.671-1.5-1.5Zm13.5,10.5H1.5c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5H13.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5Zm2-6H1.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5H15.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5Zm6.5,5.337V5.5c0-3.033-2.468-5.5-5.5-5.5H1.5C.672,0,0,.671,0,1.5s.672,1.5,1.5,1.5h15c1.379,0,2.5,1.122,2.5,2.5v11.837c-1.182,.562-2,1.767-2,3.163,0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5c0-1.396-.818-2.601-2-3.163Z"/></svg>
);

FiBrBlindsOpen.displayName = 'FiBrBlindsOpen';
