import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowLeftFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,11H20v2H3l4.5,4.5-1.41,1.41L.59,13.41c-.78-.78-.78-2.05,0-2.83L6.09,5.09l1.41,1.41L3,11ZM22,0V24h2V0h-2Z"/></svg>

);
