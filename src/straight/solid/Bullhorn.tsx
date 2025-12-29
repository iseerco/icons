import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bullhorn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.78,20.187c.357.799.28,1.777-.229,2.562-.51.784-1.372,1.252-2.307,1.252h-1.444l-2.553-7h5.337l1.195,3.187ZM7,4H3c-1.654,0-3,1.346-3,3v5c0,1.654,1.346,3,3,3h4V4Zm15,3.05V0h-2c0,2.729-3.878,4-6.5,4h-4.5v11h4.5c2.622,0,6.5,1.271,6.5,4h2v-7.05c1.141-.232,2-1.24,2-2.45s-.859-2.218-2-2.45Z"/></svg>

);
