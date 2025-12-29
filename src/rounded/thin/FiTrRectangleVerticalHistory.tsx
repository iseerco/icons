import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRectangleVerticalHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0h-5c-2.481,0-4.5,2.019-4.5,4.5v15c0,2.481,2.019,4.5,4.5,4.5h5c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5h-5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v15ZM6,3.5v17c0,.276-.224.5-.5.5s-.5-.224-.5-.5V3.5c0-.276.224-.5.5-.5s.5.224.5.5ZM1,6.5v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5Z"/>
</svg>

);
