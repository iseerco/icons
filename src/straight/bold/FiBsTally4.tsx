import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTally4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,0h3v24H0V0Zm21,0v24h3V0h-3Zm-7,24h3V0h-3v24Zm-7,0h3V0h-3v24Z"/></svg>

);
