import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrescriptionBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,7h18v12c0,2.761-2.239,5-5,5h-8c-2.419,0-4.436-1.718-4.899-4h3.899c.552,0,1-.447,1-1s-.448-1-1-1H3v-2h4c.552,0,1-.447,1-1s-.448-1-1-1H3v-2h4c.552,0,1-.447,1-1s-.448-1-1-1H3v-3ZM20.5,0H3.5C2.122,0,1,1.121,1,2.5s1.122,2.5,2.5,2.5h17c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5Z"/></svg>

);
