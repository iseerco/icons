import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CirclePhone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12c0,6.617,5.383,12,12,12s12-5.383,12-12C24,5.383,18.617,0,12,0S0,5.383,0,12Zm5-3.11c0-.826,.298-1.654,.928-2.283l1.607-1.607,3.164,3.164-2.071,2.071c1.029,2.561,2.772,4.234,5.137,5.137l2.071-2.071,3.164,3.164-1.607,1.607c-.629,.63-1.457,.928-2.283,.928-4.24,0-10.11-5.544-10.11-10.11Z"/></svg>

);
