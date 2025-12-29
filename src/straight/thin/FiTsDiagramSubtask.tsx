import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiagramSubtask = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9V2.5c0-1.38-1.12-2.5-2.5-2.5H2.5C1.12,0,0,1.12,0,2.5v6.5H4v8.5c0,1.38,1.12,2.5,2.5,2.5h3.5v1.5c0,1.38,1.12,2.5,2.5,2.5h9c1.38,0,2.5-1.12,2.5-2.5v-6.5H10v4h-3.5c-.83,0-1.5-.67-1.5-1.5V9H24Zm-13,7h12v5.5c0,.83-.67,1.5-1.5,1.5H12.5c-.83,0-1.5-.67-1.5-1.5v-5.5ZM1,2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5v5.5H1V2.5Z"/></svg>

);
