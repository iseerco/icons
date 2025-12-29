import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiagramCells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9H0V2.5C0,1.12,1.12,0,2.5,0H21.5c1.38,0,2.5,1.12,2.5,2.5v6.5ZM1,8H23V2.5c0-.83-.67-1.5-1.5-1.5H2.5c-.83,0-1.5,.67-1.5,1.5v5.5ZM21.5,24H2.5c-1.38,0-2.5-1.12-2.5-2.5v-6.5H24v6.5c0,1.38-1.12,2.5-2.5,2.5ZM1,16v5.5c0,.83,.67,1.5,1.5,1.5H21.5c.83,0,1.5-.67,1.5-1.5v-5.5H1Z"/></svg>

);
