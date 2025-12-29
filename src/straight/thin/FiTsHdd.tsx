import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C2.12,0,1,1.12,1,2.5V24H23V2.5c0-1.38-1.12-2.5-2.5-2.5ZM3.5,1H20.5c.83,0,1.5,.67,1.5,1.5v13.5H2V2.5c0-.83,.67-1.5,1.5-1.5Zm-1.5,22v-6H22v6H2Zm18-3c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1Zm-3,0c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1Z"/></svg>

);
