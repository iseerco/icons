import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEquality = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.743l-3.438-9.743h-7.062V0h-3V2H3.438L0,11.743v.757c0,2.485,2.014,4.5,4.5,4.5s4.5-2.015,4.5-4.5h0v-.757l-2.38-6.743h3.88V21H4v3H20v-3h-6.5V5h3.88l-2.38,6.743v.757c0,2.485,2.014,4.5,4.5,4.5s4.5-2.015,4.5-4.5h0v-.757Zm-20.909,.257l1.409-3.993,1.409,3.993H3.091Zm15,0l1.409-3.993,1.409,3.993h-2.819Z"/></svg>

);
