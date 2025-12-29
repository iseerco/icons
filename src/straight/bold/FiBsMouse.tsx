import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,3h-2V0h-3V3h-2A5.506,5.506,0,0,0,3,8.5V15a9,9,0,0,0,18,0V8.5A5.506,5.506,0,0,0,15.5,3ZM18,15A6,6,0,0,1,6,15V8.5A2.5,2.5,0,0,1,8.5,6h7A2.5,2.5,0,0,1,18,8.5Z"/><rect x="10.5" y="8" width="3" height="5"/></svg>

);
