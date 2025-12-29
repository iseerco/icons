import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassCitrus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,5.002l.918,5.998h9.384c.472.753,1.055,1.43,1.732,2H1.186l1.125,8.398c.2,1.49,1.471,2.602,2.973,2.602h8.984c1.503,0,2.774-1.112,2.974-2.602l2.193-16.397-19.435.002Zm11.024,1.974h2.002c.208,1.969,1.691,3.562,3.605,3.938l-.264,1.974c-2.89-.511-5.126-2.931-5.343-5.912Zm12.976-.474c0,2.514-1.43,4.691-3.519,5.772l1.24-9.274h-9.691C13.185,1.199,15.201.002,17.5.002,21.09.002,24,2.912,24,6.502Z"/></svg>

);
