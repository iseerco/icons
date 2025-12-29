import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBracketSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,24h-2c-2.48,0-4.5-2.02-4.5-4.5V4.5c0-2.48,2.02-4.5,4.5-4.5h2c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-2c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h2c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"/></svg>

);
