import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDumbbellHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,16v3h-1v3h-2v2h-3v-5H6v5H3v-2H1v-3H0v-3H1v-3H3v-2h3v5h12v-5h3v2h2v3h1Zm-12-5.2s6-4.044,6-7.5c0-1.823-1.343-3.3-3-3.3s-3,1.477-3,3.3c0-1.823-1.343-3.3-3-3.3s-3,1.477-3,3.3c0,3.456,6,7.5,6,7.5Z"/>
</svg>

);
