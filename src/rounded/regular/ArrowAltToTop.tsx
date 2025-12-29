import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.448,2.232c.152-.154,.352-.232,.552-.232s.4,.077,.552,.232l4.361,4.418c.492,.498,.143,1.35-.552,1.35h-3.361v15c0,.552-.448,1-1,1s-1-.448-1-1V8h-3.361c-.695,0-1.044-.852-.552-1.35L11.448,2.232ZM20,0H4c-.552,0-1,.448-1,1s.448,1,1,1H20c.553,0,1-.448,1-1s-.447-1-1-1Z"/></svg>

);
