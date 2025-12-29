import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Notes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.654,22l-2,2H0v-15.223c0-1.302.839-2.402,2-2.816v16.038h13.654Zm.346-10h8V3c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3v17h12v-8Zm7.687,2h-5.687v5.687l5.687-5.687Z"/></svg>

);
