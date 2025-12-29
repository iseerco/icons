import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TicketAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,21H3c-1.657,0-3-1.343-3-3v-4l1.096,.003c1.1-.029,1.986-.855,1.986-1.962s-.884-2.009-1.982-2.04l-1.1,.003V6c0-1.657,1.343-3,3-3H21c1.657,0,3,1.343,3,3v4h-.888c-.997,0-1.922,.679-2.084,1.662-.206,1.252,.758,2.338,1.972,2.338h1v4c0,1.657-1.343,3-3,3Z"/></svg>

);
