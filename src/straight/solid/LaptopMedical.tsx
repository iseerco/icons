import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.991,18l-.846-1H0v1c0,1.657,1.343,3,3,3h18c1.657,0,3-1.343,3-3v-1h-8.14l-.847,1h-6.022ZM2,3v12h7.082l.847,1h4.157l.846-1h7.068V3H2Zm13,7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2Z"/></svg>

);
