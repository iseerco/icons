import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ValueAbsolute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.707,7.707l-4.293,4.293,4.293,4.293-1.414,1.414-4.293-4.293-4.293,4.293-1.414-1.414,4.293-4.293-4.293-4.293,1.414-1.414,4.293,4.293,4.293-4.293,1.414,1.414ZM0,24h2V0H0v24ZM22,0v24h2V0h-2Z"/></svg>

);
