import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,24c-1.654,0-3-1.346-3-3V3c0-1.654,1.346-3,3-3s3,1.346,3,3v18c0,1.654-1.346,3-3,3ZM3,19c-1.654,0-3-1.346-3-3V3C0,1.346,1.346,0,3,0s3,1.346,3,3v13c0,1.654-1.346,3-3,3Zm9-6c-1.654,0-3-1.346-3-3V3c0-1.654,1.346-3,3-3s3,1.346,3,3v7c0,1.654-1.346,3-3,3Z"/>
</svg>

);
