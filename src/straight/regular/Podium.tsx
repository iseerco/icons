import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Podium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10H4v-3c0-1.654,1.346-3,3-3h.172c.413,1.164,1.524,2,2.828,2h3c1.654,0,3-1.346,3-3s-1.346-3-3-3h-3c-1.304,0-2.415,.836-2.828,2h-.172c-2.757,0-5,2.243-5,5v3H0v2H2.153l2,12h15.694l2-12h2.153v-2ZM10,2h3c.551,0,1,.449,1,1s-.449,1-1,1h-3c-.551,0-1-.449-1-1s.449-1,1-1Zm8.153,20H5.847l-1.667-10h15.639l-1.667,10Z"/></svg>

);
