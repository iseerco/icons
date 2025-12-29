import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24h-6V2c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2V24Zm9,0h-6V8c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2V24Zm-18,0H0V14c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2v10Z"/></svg>

);
