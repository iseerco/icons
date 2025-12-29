import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoving = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,4.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-5,6.479v-2h-4v2h-3V4h1V2c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v2h1v6.979h-3Zm-3-7.979v2.979h2V3h-2ZM2.5,7c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5S0,3.119,0,4.5s1.119,2.5,2.5,2.5Zm2.204,2.284l-.018,.009c-.424-.77-1.238-1.293-2.185-1.293-1.381,0-2.5,1.098-2.5,2.479v7.521H1v6h3v-6h1v-2h4v-3h-2.548l-1.749-3.716Zm16.796-1.284c-.947,0-1.761,.523-2.185,1.293l-.018-.008-1.749,3.716h-2.548v3h4v2h1v6h3v-6h1v-7.521c0-1.381-1.119-2.479-2.5-2.479Z"/>
</svg>

);
