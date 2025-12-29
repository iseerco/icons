import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,2.764V6.082a8,8,0,1,1-8,0V2.764a11,11,0,1,0,8,0Z"/><rect x="10.5" width="3" height="8"/></svg>

);
