import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mountains = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8a4,4,0,0,1,0-8A4,4,0,0,1,20,8ZM11,24V22.781l4.277-9.343a2.462,2.462,0,0,1,4.446,0L24,22.737v1.219ZM12.248,6.541a2.662,2.662,0,0,0-4.81,0L0,22.781V24H9V22l4.46-9.4a4.487,4.487,0,0,1,.959-1.343Z"/></svg>

);
