import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleDoubleSmallLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.543,7.061,9.422,4.939,4.129,10.232a2.5,2.5,0,0,0,0,3.536l5.293,5.293,2.121-2.122L6.6,12Z"/><path d="M18.543,7.061,16.422,4.939l-6,6a1.5,1.5,0,0,0,0,2.122l6,6,2.121-2.122L13.6,12Z"/></svg>

);
