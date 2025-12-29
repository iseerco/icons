import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalculatorSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,11h11v2h-11v11h-2v-11H0v-2h11V0h2v11Zm3,7h8v-2h-8v2Zm0,4h8v-2h-8v2ZM8,4H0v2h8v-2Zm13,0V1h-2v3h-3v2h3v3h2v-3h3v-2h-3ZM7.062,15.523l-2.562,2.562-2.562-2.562-1.414,1.414,2.562,2.562-2.562,2.562,1.414,1.414,2.562-2.562,2.562,2.562,1.414-1.414-2.562-2.562,2.562-2.562-1.414-1.414Z"/></svg>

);
