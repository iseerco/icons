import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPedestal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,23h-1.5V4.5c0-2.481-2.019-4.5-4.5-4.5H7.5C5.019,0,3,2.019,3,4.5v18.5h-1.5c-.276,0-.5.224-.5.5s.224.5.5.5h21c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM4,4.5c0-1.93,1.57-3.5,3.5-3.5h9c1.93,0,3.5,1.57,3.5,3.5v18.5H4V4.5Zm4-.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm10,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/>
</svg>

);
