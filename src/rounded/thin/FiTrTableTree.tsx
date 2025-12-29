import React from 'react';
import type { IconProps } from '../../types';

export const FiTrTableTree: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v.5H1v-.5c0-1.93,1.57-3.5,3.5-3.5Zm15,18H4.5c-1.93,0-3.5-1.57-3.5-3.5V8H5v7.5c0,.827,.673,1.5,1.5,1.5h5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H6.5c-.275,0-.5-.225-.5-.5v-2.5h3.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-3.5v-4H23v9.5c0,1.93-1.57,3.5-3.5,3.5Zm-1.5-4.5c0,.276-.224,.5-.5,.5h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3c.276,0,.5,.224,.5,.5Zm-2.5-3.5h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Z"/></svg>
);

FiTrTableTree.displayName = 'FiTrTableTree';
