import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RadioButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M5,23c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5ZM23,5H14c-.552,0-1,.448-1,1h0c0,.552,.448,1,1,1h9c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm0,12H14c-.552,0-1,.448-1,1h0c0,.552,.448,1,1,1h9c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1ZM5,1C2.243,1,0,3.243,0,6s2.243,5,5,5,5-2.243,5-5S7.757,1,5,1Zm0,7c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z"/>
</svg>

);
