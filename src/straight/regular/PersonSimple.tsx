import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.5,14.5h-2v7h-2v-7h-2v7h-2v-7h-2V9c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v8Zm-2-8c0-.551-.448-1-1-1h-4c-.552,0-1,.449-1,1v6h6v-6Z"/></svg>

);
