import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H13.5V0h-3V3H3A3,3,0,0,0,0,6V21H24V6A3,3,0,0,0,21,3Zm0,15H3V6H21Z"/><rect x="5" y="8" width="3" height="3"/><rect x="10" y="8" width="3" height="3"/><rect x="15" y="8" width="4" height="3"/><rect x="5" y="13" width="8" height="3"/><rect x="15" y="13" width="4" height="3"/></svg>

);
