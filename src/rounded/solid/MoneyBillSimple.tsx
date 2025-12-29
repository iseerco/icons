import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyBillSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,12c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm10-3v6c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5v-6c0-2.76,2.24-5,5-5h14c2.76,0,5,2.24,5,5Zm-8,3c0-2.21-1.79-4-4-4s-4,1.79-4,4,1.79,4,4,4,4-1.79,4-4Z"/></svg>

);
