import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZoomOut = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.707,22.293l-5.966-5.965a10,10,0,1,0-1.414,1.414l5.966,5.965a1,1,0,0,0,1.414-1.414ZM13,11H7A1,1,0,0,1,7,9h6a1,1,0,0,1,0,2Z"/></svg>

);
