import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tenge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,1c0-.552,.448-1,1-1H21c.552,0,1,.448,1,1s-.448,1-1,1H3c-.552,0-1-.448-1-1Zm19,3H3c-.552,0-1,.448-1,1s.448,1,1,1H11V23c0,.552,.448,1,1,1s1-.448,1-1V6h8c.552,0,1-.448,1-1s-.448-1-1-1Z"/></svg>

);
