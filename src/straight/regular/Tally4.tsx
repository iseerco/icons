import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tally4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,0h2v24H0V0Zm22,0v24h2V0h-2Zm-7,24h2V0h-2v24Zm-8,0h2V0h-2v24Z"/></svg>

);
