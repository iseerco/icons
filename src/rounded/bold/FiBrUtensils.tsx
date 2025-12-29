import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrUtensils = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.327.758a2.69,2.69,0,0,0-2.9-.55A2.4,2.4,0,0,0,16,2.449V22.5a1.5,1.5,0,0,0,3,0V20.017C25.114,15.384,25.64,5.855,20.327.758ZM19,15.744v-12C21.491,6.636,21.712,12.722,19,15.744ZM13,1.5v6a6.506,6.506,0,0,1-5,6.318V22.5a1.5,1.5,0,0,1-3,0V13.818A6.506,6.506,0,0,1,0,7.5v-6a1.5,1.5,0,0,1,3,0v6a3.5,3.5,0,0,0,2,3.149V1.5a1.5,1.5,0,0,1,3,0v9.149A3.5,3.5,0,0,0,10,7.5v-6A1.5,1.5,0,0,1,13,1.5Z"/></svg>

);
