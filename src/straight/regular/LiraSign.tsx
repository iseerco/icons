import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LiraSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,13c0,4.963-4.038,9-9,9h-3V13.354l8-2.195v-2.053l-8,2.195v-2.053l8-2.195v-2.053l-8,2.195V0h-2V7.743l-4,1.097v2.053l4-1.097v2.053l-4,1.097v2.053l4-1.097v10.097h5c6.065,0,11-4.935,11-11h-2Z"/></svg>

);
