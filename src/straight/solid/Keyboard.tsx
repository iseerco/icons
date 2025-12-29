import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Keyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,6H13V2H11V6H3A3,3,0,0,0,0,9V20H24V9A3,3,0,0,0,21,6ZM9,10h3v2H9ZM6,16H4V14H6Zm1-4H4V10H7Zm9,4H8V14h8Zm4,0H18V14h2Zm0-4H14V10h6Z"/></svg>

);
