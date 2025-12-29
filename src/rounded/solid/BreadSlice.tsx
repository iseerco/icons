import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BreadSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.934,5.179h0A5.122,5.122,0,0,0,18.848,1H6.242C2.85,1,.482,2.6.066,5.179A4.989,4.989,0,0,0,1.609,9.654,1.119,1.119,0,0,1,2,10.446V18a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.446a1.115,1.115,0,0,1,.388-.789A4.99,4.99,0,0,0,23.934,5.179ZM8,18a1,1,0,0,1,0-2A1,1,0,0,1,8,18Zm0-4a1,1,0,0,1,0-2A1,1,0,0,1,8,14Zm4,4a1,1,0,0,1,0-2A1,1,0,0,1,12,18Z"/></svg>

);
