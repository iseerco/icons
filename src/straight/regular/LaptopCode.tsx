import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.207,12.475l-1.414,1.414-2.257-2.257c-.775-.775-.775-2.036,0-2.812l2.255-2.255,1.414,1.414-2.255,2.255,2.257,2.241Zm5,1.414l2.257-2.257c.775-.775,.775-2.036,0-2.812l-2.255-2.255-1.414,1.414,2.255,2.239-2.257,2.257,1.414,1.414Zm8.793,1.111v3c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3v-3H2V3H22V15h2Zm-20,0h4.914l1,1h4.172l1-1h4.914V5H4V15Zm18,2h-6.086l-1,1h-5.828l-1-1H2v1c0,.551,.449,1,1,1H21c.551,0,1-.449,1-1v-1Z"/></svg>

);
