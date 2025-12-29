import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UsbPendrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,9.026V4a4,4,0,0,0-4-4H9A4,4,0,0,0,5,4V9.026A4.977,4.977,0,0,0,3,13v2a9,9,0,0,0,18,0V13A4.977,4.977,0,0,0,19,9.026ZM7,8V4A2,2,0,0,1,9,2h6a2,2,0,0,1,2,2V8H7Zm12,7A7,7,0,0,1,5,15V13a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3Z"/><circle cx="10" cy="5" r="1"/><circle cx="14" cy="5" r="1"/></svg>

);
