import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ItalianLiraSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,22v2H2v-2c1.65,0,3-1.35,3-3v-3H2v-2h3v-2H2v-2h3v-2C5,3.59,8.59,0,13,0s7.55,3.14,7.69,3.28l-1.38,1.45s-2.91-2.72-6.31-2.72-6,2.69-6,6v2h11v2H7v2h11v2H7v3c0,1.12-.37,2.16-1,3H22Z"/></svg>

);
