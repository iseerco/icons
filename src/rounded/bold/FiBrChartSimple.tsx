import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,3V21c0,1.66-1.34,3-3,3s-3-1.34-3-3V3c0-1.66,1.34-3,3-3s3,1.34,3,3Zm6,3c-1.66,0-3,1.34-3,3v12c0,1.66,1.34,3,3,3s3-1.34,3-3V9c0-1.66-1.34-3-3-3ZM3,12c-1.66,0-3,1.34-3,3v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6c0-1.66-1.34-3-3-3Z"/></svg>

);
