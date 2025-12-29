import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AgeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm4,3.5h-3c-1.654,0-3,1.346-3,3v9h2v6h2v-6h1v6h2v-6h2v-9c0-1.654-1.346-3-3-3Zm-16.5,0c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm7-3c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm-4.5,9v7h2v5h2v-5h2v-10h-3c-1.654,0-3,1.346-3,3ZM0,15v5h2v4h2v-4h1v-8h-2c-1.654,0-3,1.346-3,3Z"/>
</svg>

);
