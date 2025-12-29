import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Robot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,10v-3c0-1.654-1.346-3-3-3h-6V1h-2v3h-6c-1.654,0-3,1.346-3,3v3H0v6h2v6h20v-6h2v-6h-2Zm-2,10H4V7c0-.552.449-1,1-1h14c.552,0,1,.448,1,1v13Zm-10-9.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm5.5,1.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm-9.5,3h2v2h-2v-2Zm4,0h4v2h-4v-2Zm6,0h2v2h-2v-2Z"/>
</svg>

);
