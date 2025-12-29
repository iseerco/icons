import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.475,23H0V4C0,2.346,1.346,1,3,1h3.236l4,2h7.764c1.654,0,3,1.346,3,3v4h3.021l-3.547,13Zm-16.109-2h14.582l2.455-9H7.216l-2.851,9Zm-2.365,0h.268l3.483-11h13.249v-4c0-.551-.448-1-1-1h-8.236l-4-2h-2.764c-.552,0-1,.449-1,1v17Z"/></svg>

);
