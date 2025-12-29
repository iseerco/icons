import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramCells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10H0V3C0,1.35,1.35,0,3,0H21c1.65,0,3,1.35,3,3v7Zm-3,14H3c-1.65,0-3-1.35-3-3v-7H24v7c0,1.65-1.35,3-3,3Z"/></svg>

);
