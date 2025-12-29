import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,22h-7V6h3.361c.695,0,1.044-.852,.552-1.35L12.552,.232c-.305-.309-.799-.309-1.104,0L7.087,4.65c-.492,.498-.143,1.35,.552,1.35h3.361V22H4c-.552,0-1,.448-1,1s.448,1,1,1H20c.552,0,1-.448,1-1s-.448-1-1-1Z"/></svg>

);
