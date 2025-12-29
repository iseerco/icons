import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,11h-4v-2h4v2Zm5-6V22H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3ZM3,13H11v-2H3v2Zm18,2H3v2H21v-2Zm0-8H13v6h8V7Z"/></svg>

);
