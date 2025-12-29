import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSort = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.383,10H1.617L9.929.918A2.8,2.8,0,0,1,14.082.93ZM8.43,7h7.14L12,3.1Zm3.428-4.057h0Zm.294-.011,0,0ZM12,24a2.8,2.8,0,0,1-2.082-.93L1.617,14H22.383l-8.312,9.082A2.788,2.788,0,0,1,12,24Zm-.149-2.935,0,0Zm.29-.009h0ZM8.43,17,12,20.9,15.57,17Z"/></svg>

);
