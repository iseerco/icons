import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramCells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10H0V3C0,1.35,1.35,0,3,0H21c1.65,0,3,1.35,3,3v7ZM2,8H22V3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1v5ZM21,24H3c-1.65,0-3-1.35-3-3v-7H24v7c0,1.65-1.35,3-3,3ZM2,16v5c0,.55,.45,1,1,1H21c.55,0,1-.45,1-1v-5H2Z"/></svg>

);
