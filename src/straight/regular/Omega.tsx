import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Omega = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,24h-9v-4.443l.666-.235c3.848-1.362,6.334-4.628,6.334-8.321,0-4.962-4.486-9-10-9S2,6.038,2,11c0,3.693,2.486,6.959,6.333,8.321l.667.235v4.443H0v-2h7v-1.05C2.724,19.168,0,15.331,0,11,0,4.935,5.383,0,12,0s12,4.935,12,11c0,4.331-2.724,8.168-7,9.95v1.05h7v2Z"/>
</svg>

);
