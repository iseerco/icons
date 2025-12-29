import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToggleOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,4h-8C3.589,4,0,7.589,0,12s3.589,8,8,8h8c4.411,0,8-3.589,8-8s-3.589-8-8-8Zm0,13c-2.757,0-5-2.242-5-5s2.243-5,5-5,5,2.242,5,5-2.243,5-5,5Z"/></svg>

);
