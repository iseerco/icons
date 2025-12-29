import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.96,1.46L22.54,.04,2,20.59V10H0v12c0,1.1,.9,2,2,2H14v-2H3.41L23.96,1.46Z"/></svg>

);
