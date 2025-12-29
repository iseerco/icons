import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCentSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.02,16.05l2.67,1.38c-1.33,2.58-3.84,4.26-6.69,4.54v2.04h-3v-2.01c-4.45-.24-8-3.93-8-8.44v-3.09C3,5.95,6.55,2.25,11,2.01V0h3V2.04c2.89,.28,5.43,2.01,6.75,4.66l-2.69,1.34c-.93-1.87-2.8-3.03-4.89-3.03h-1.72c-3.01,0-5.45,2.45-5.45,5.45v3.09c0,3.01,2.45,5.45,5.45,5.45h1.72c2.05,0,3.91-1.13,4.85-2.95Z"/></svg>

);
