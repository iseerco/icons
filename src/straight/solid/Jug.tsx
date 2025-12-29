import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Jug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.66,10.57l-.78-.52c.69-.65,1.11-1.56,1.11-2.56,0-1.93-1.57-3.5-3.5-3.5-.54,0-1.05,.12-1.5,.34V2h1V0H8V2h1V7.46l-4.66,3.11c-.82,.54-1.31,1.45-1.33,2.43h15v2H3v9H21V13.07c0-1-.5-1.94-1.34-2.5Zm-2.55-1.7l-2.11-1.41c.02-.81,.68-1.47,1.5-1.47s1.5,.67,1.5,1.5c0,.6-.36,1.14-.89,1.37Z"/></svg>

);
