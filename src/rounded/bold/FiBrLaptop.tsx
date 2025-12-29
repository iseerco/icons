import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLaptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,15V8.5A5.506,5.506,0,0,0,16.5,3h-9A5.506,5.506,0,0,0,2,8.5V15a2,2,0,0,0-2,2v1.154A1.847,1.847,0,0,0,1.846,20H22.154A1.847,1.847,0,0,0,24,18.154V17A2,2,0,0,0,22,15Zm-7.231,1H9.231l-.923-1H5V8.5A2.5,2.5,0,0,1,7.5,6h9A2.5,2.5,0,0,1,19,8.5V15H15.692Z"/></svg>

);
