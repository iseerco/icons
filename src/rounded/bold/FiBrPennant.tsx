import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPennant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.643,8.832,4.754,3.582A2.5,2.5,0,1,0,1,4.5v18a1.5,1.5,0,0,0,3,0V20.8L21.671,15.3a3.4,3.4,0,0,0-.028-6.47Zm-.891,3.614L4,17.653V6.489l16.724,5.2a.372.372,0,0,1,.276.384A.362.362,0,0,1,20.752,12.446Z"/></svg>

);
