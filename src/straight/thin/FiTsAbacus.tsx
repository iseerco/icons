import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAbacus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.5,0H4.5c-1.378,0-2.5,1.121-2.5,2.5V24H22V2.5c0-1.379-1.122-2.5-2.5-2.5ZM4.5,1h15c.827,0,1.5,.673,1.5,1.5v1.5h-3v-1h-1v1h-4v-1h-1v1h-2v-1h-1v1h-2v-1h-1v1H3v-1.5c0-.827,.673-1.5,1.5-1.5Zm7.5,17v1h-2v-1h-1v1h-2v-1h-1v1H3v-4h3v1h1v-1h2v1h1v-1h2v1h1v-1h4v1h1v-1h3v4H13v-1h-1Zm6-4v-1h-1v1h-4v-1h-1v1h-2v-1h-1v1h-2v-1h-1v1H3v-4h3v1h1v-1h2v1h1v-1h2v1h1v-1h4v1h1v-1h3v4h-3Zm0-5v-1h-1v1h-4v-1h-1v1h-2v-1h-1v1h-2v-1h-1v1H3V5h3v1h1v-1h2v1h1v-1h2v1h1v-1h4v1h1v-1h3v4h-3ZM3,23v-3h3v1h1v-1h2v1h1v-1h2v1h1v-1h8v3H3Z"/>
</svg>

);
