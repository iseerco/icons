import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLevelDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,22.763V2.5c0-1.379-1.122-2.5-2.5-2.5H0V1H10.5c.827,0,1.5,.673,1.5,1.5V22.763l-4.757-4.757-.707,.707,4.809,4.809c.319,.318,.737,.478,1.155,.478s.837-.159,1.155-.478l4.809-4.809-.707-.707-4.757,4.757Z"/></svg>

);
