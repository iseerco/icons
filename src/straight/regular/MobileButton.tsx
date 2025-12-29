import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MobileButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,0V21c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V0H4Zm14,21c0,.551-.448,1-1,1H7c-.551,0-1-.449-1-1V2h12V21Zm-4-1h-4v-2h4v2Z"/></svg>

);
