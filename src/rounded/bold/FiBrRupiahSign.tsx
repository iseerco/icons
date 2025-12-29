import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRupiahSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,12h-1.5c-1.65,0-3,1.35-3,3v7.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-1.5h1.5c2.48,0,4.5-2.02,4.5-4.5s-2.02-4.5-4.5-4.5Zm0,6h-1.5v-3h1.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5Zm-8.99-2.82c2.65-1.3,4.49-4.03,4.49-7.18C15,3.59,11.41,0,7,0h-1.5C2.47,0,0,2.47,0,5.5V22.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-6.5H7c.19,0,.37-.02,.56-.03l3.6,7.2c.26,.53,.79,.83,1.34,.83,.23,0,.45-.05,.67-.16,.74-.37,1.04-1.27,.67-2.01l-3.33-6.65Zm-7.51-2.18V5.5c0-1.38,1.12-2.5,2.5-2.5h1.5c2.76,0,5,2.24,5,5s-2.24,5-5,5H3Z"/></svg>

);
