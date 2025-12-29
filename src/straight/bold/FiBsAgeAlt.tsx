import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAgeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.5,16.5h-2.5v5h-5v-5h-2.5v-9.5c0-1.93,1.57-3.5,3.5-3.5h3c1.93,0,3.5,1.57,3.5,3.5v9.5Zm-7-3h4v-6.5c0-.276-.224-.5-.5-.5h-3c-.276,0-.5.224-.5.5v6.5ZM12,3c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm-5,9.5v7.5h2v4h3v-7h-2v-4.5c0-.276.224-.5.5-.5h1.5v-3h-1.5c-1.93,0-3.5,1.57-3.5,3.5Zm-2-6.5c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5ZM0,15.5v5.5h2v3h3v-6h-2v-2.5c0-.276.224-.5.5-.5h1.5v-3h-1.5c-1.93,0-3.5,1.57-3.5,3.5Z"/>
</svg>

);
