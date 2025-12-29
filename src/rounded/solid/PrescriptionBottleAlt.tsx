import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrescriptionBottleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,5H3.5c-1.378,0-2.5-1.121-2.5-2.5S2.122,0,3.5,0h17c1.378,0,2.5,1.121,2.5,2.5s-1.122,2.5-2.5,2.5Zm.5,2H3v12c0,2.761,2.239,5,5,5h8c2.761,0,5-2.239,5-5V7Zm-6,9h-2v2c0,.553-.448,1-1,1s-1-.447-1-1v-2h-2c-.552,0-1-.447-1-1s.448-1,1-1h2v-2c0-.553.448-1,1-1s1,.447,1,1v2h2c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>

);
