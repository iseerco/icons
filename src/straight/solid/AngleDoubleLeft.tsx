import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.121,11.293,13.013,1.4,11.6-.013,1.707,9.879a3,3,0,0,0,0,4.242l9.885,9.885,1.414-1.414L3.122,12.707A1,1,0,0,1,3.121,11.293Z"/><path d="M23,1.417,21.583,0l-11.29,11.29a1,1,0,0,0,0,1.414L21.584,24,23,22.584,12.414,12Z"/></svg>

);
