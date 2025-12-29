import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleSmallLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.422,19.061,8.129,13.768a2.5,2.5,0,0,1,0-3.536l5.293-5.293,2.121,2.122L10.6,12l4.939,4.939Z"/></svg>

);
