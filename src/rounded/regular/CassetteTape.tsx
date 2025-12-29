import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CassetteTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,3H5C2.24,3,0,5.24,0,8v8c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V8c0-2.76-2.24-5-5-5Zm3,13c0,1.65-1.35,3-3,3h-.67l-.74-1.11c-.37-.56-1-.89-1.66-.89h-7.86c-.67,0-1.29,.33-1.66,.89l-.74,1.11h-.67c-1.65,0-3-1.35-3-3V8c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v8Zm-5-8H7c-1.65,0-3,1.35-3,3s1.35,3,3,3h10c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm-2.82,2c-.11,.31-.18,.65-.18,1s.07,.69,.18,1h-4.37c.11-.31,.18-.65,.18-1s-.07-.69-.18-1h4.37Zm-7.18,0c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Zm10,2c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Z"/></svg>

);
