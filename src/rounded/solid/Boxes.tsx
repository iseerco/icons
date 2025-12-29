import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Boxes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,13H3c-1.657,0-3,1.343-3,3v5c0,1.657,1.343,3,3,3H11V13Zm-7.5,4h0c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1Zm17.5-4H13v11h8c1.657,0,3-1.343,3-3v-5c0-1.657-1.343-3-3-3Zm-1.5,5h-2c-.552,0-1-.448-1-1h0c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1ZM15,0h-6c-1.657,0-3,1.343-3,3V11h12V3c0-1.657-1.343-3-3-3Zm-2,5h-2c-.552,0-1-.448-1-1h0c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1Z"/></svg>

);
