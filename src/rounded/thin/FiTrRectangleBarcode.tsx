import React from 'react';
import type { IconProps } from '../../types';

export const FiTrRectangleBarcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.5,22H4.5c-2.481,0-4.5-2.019-4.5-4.5V6.5C0,4.019,2.019,2,4.5,2h15c2.481,0,4.5,2.019,4.5,4.5v11c0,2.481-2.019,4.5-4.5,4.5ZM4.5,3c-1.93,0-3.5,1.57-3.5,3.5v11c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V6.5c0-1.93-1.57-3.5-3.5-3.5H4.5Zm.5,14.5V6.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v11c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm10,0V6.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v11c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm-6-.5V7c0-.552-.447-1-1-1s-1,.448-1,1v10c0,.553,.447,1,1,1s1-.447,1-1Zm3,0V7c0-.552-.447-1-1-1s-1,.448-1,1v10c0,.553,.447,1,1,1s1-.447,1-1Zm8,0V7c0-.552-.447-1-1-1s-1,.448-1,1v10c0,.553,.447,1,1,1s1-.447,1-1Zm-3,.5V6.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v11c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Z"/></svg>
);

FiTrRectangleBarcode.displayName = 'FiTrRectangleBarcode';
