import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrWaveSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,22h-2.5c-2.206,0-4-1.794-4-4V6c0-.551-.449-1-1-1h-2.5c-.551,0-1,.449-1,1v6c0,.829-.671,1.5-1.5,1.5H1.5c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h1.5v-4.5c0-2.206,1.794-4,4-4h2.5c2.206,0,4,1.794,4,4v12c0,.551.449,1,1,1h2.5c.551,0,1-.449,1-1v-6c0-.829.671-1.5,1.5-1.5h3c.829,0,1.5.671,1.5,1.5s-.671,1.5-1.5,1.5h-1.5v4.5c0,2.206-1.794,4-4,4Z"/></svg>

);
