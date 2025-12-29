import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCannedFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,7v-1h-6.053c.65-.636,1.053-1.522,1.053-2.5,0-1.93-1.57-3.5-3.5-3.5V1c1.378,0,2.5,1.121,2.5,2.5s-1.122,2.5-2.5,2.5H0v1H1V23H0v1H24v-1h-1V7h1Zm-2,16H2v-3H20v-1H2V11H20v-1H2v-3H22V23Z"/></svg>

);
