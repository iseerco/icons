import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Child = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.5,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm6.5,12.5h-1v5h-2v-5h-2v5h-2v-5h-1v-6c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3v6Zm-6-2h4v-4c0-.552-.449-1-1-1h-2c-.551,0-1,.448-1,1v4Z"/>
</svg>

);
