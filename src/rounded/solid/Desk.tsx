import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Desk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19v2c0,1.657-1.343,3-3,3h-3c-1.657,0-3-1.343-3-3v-2h9Zm-9-2h9v-2c0-1.657-1.343-3-3-3H13v-2h3c1.657,0,3-1.343,3-3V3c0-1.657-1.343-3-3-3H8c-1.657,0-3,1.343-3,3V7c0,1.657,1.343,3,3,3h3v2H1c-.552,0-1,.448-1,1H0c0,.552,.448,1,1,1h1v9c0,.552,.448,1,1,1h0c.552,0,1-.448,1-1V14H15v3Z"/>
</svg>

);
