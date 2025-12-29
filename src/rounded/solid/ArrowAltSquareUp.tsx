import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltSquareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2.639,12h-3.361v5c0,.552-.447,1-1,1s-1-.448-1-1v-5h-3.361c-.695,0-1.044-.852-.552-1.35l4.361-4.418c.305-.309,.799-.309,1.104,0l4.361,4.418c.492,.498,.143,1.35-.552,1.35Z"/></svg>

);
