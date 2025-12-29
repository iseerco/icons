import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCalendarDays = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2.02v-.52c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v.5H8v-.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v.52C2.2,2.28,0,4.64,0,7.5v11c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V7.5c0-2.86-2.2-5.22-5-5.48ZM10,14v-4h4v4h-4Zm4,3v4h-4v-4h4ZM3,10H7v4H3v-4Zm14,0h4v4h-4v-4ZM5.5,5h13c1.21,0,2.22,.86,2.45,2H3.05c.23-1.14,1.24-2,2.45-2Zm-2.5,13.5v-1.5H7v4h-1.5c-1.38,0-2.5-1.12-2.5-2.5Zm15.5,2.5h-1.5v-4h4v1.5c0,1.38-1.12,2.5-2.5,2.5Z"/></svg>

);
