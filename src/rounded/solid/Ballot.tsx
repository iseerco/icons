import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ballot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,0H7C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-7,19c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-2c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1v2Zm0-6c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-2c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1v2Zm0-6c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-2c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1v2Zm7,12h-4c-1.308-.006-1.307-1.994,0-2h4c1.308,.006,1.307,1.994,0,2Zm0-6h-4c-1.308-.006-1.307-1.994,0-2h4c1.308,.006,1.307,1.994,0,2Zm0-6h-4c-1.308-.006-1.307-1.994,0-2h4c1.308,.006,1.307,1.994,0,2Z"/></svg>

);
