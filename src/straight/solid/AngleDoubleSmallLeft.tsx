import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleSmallLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.189,6.707,9.775,5.293,4.482,10.586a2,2,0,0,0,0,2.828l5.293,5.293,1.414-1.414L5.9,12Z"/><path d="M18.189,6.707,16.775,5.293l-6,6a1,1,0,0,0,0,1.414l6,6,1.414-1.414L12.9,12Z"/></svg>

);
