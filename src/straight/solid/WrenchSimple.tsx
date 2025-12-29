import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WrenchSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.315,.542l-.315-.105V10h-6V.437l-.315,.105C4.387,1.973,1.5,5.975,1.5,10.5c0,4.28,2.584,8.093,6.5,9.703v3.797h8v-3.797c3.916-1.61,6.5-5.423,6.5-9.703,0-4.525-2.887-8.527-7.185-9.958Z"/></svg>

);
