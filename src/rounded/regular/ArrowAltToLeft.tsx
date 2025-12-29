import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12c0,.552-.448,1-1,1H8v3.361c0,.695-.852,1.044-1.35,.552L2.232,12.552c-.154-.152-.232-.352-.232-.552s.077-.4,.232-.552L6.65,7.087c.498-.492,1.35-.143,1.35,.552v3.361h15c.552,0,1,.448,1,1ZM1,3c-.552,0-1,.448-1,1V20c0,.552,.448,1,1,1s1-.448,1-1V4c0-.552-.448-1-1-1Z"/></svg>

);
