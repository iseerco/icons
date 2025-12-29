import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlockQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,5H1c-.552,0-1-.448-1-1s.448-1,1-1h22c.552,0,1,.448,1,1s-.448,1-1,1Zm1,15c0-.552-.448-1-1-1H7c-.552,0-1,.448-1,1s.448,1,1,1h16c.552,0,1-.448,1-1Zm0-8c0-.552-.448-1-1-1H7c-.552,0-1,.448-1,1s.448,1,1,1h16c.552,0,1-.448,1-1ZM2,20v-8c0-.552-.448-1-1-1s-1,.448-1,1v8c0,.552.448,1,1,1s1-.448,1-1Z"/>
</svg>

);
