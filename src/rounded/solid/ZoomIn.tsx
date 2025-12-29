import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZoomIn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,20a9.959,9.959,0,0,0,6.327-2.258l5.966,5.965a1,1,0,0,0,1.414-1.414l-5.966-5.965A10,10,0,1,0,10,20ZM7,9H9V7a1,1,0,0,1,2,0V9h2a1,1,0,0,1,0,2H11v2a1,1,0,0,1-2,0V11H7A1,1,0,0,1,7,9Z"/></svg>

);
