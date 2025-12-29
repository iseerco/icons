import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChartKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3s3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm2,21c0,1.103-.897,2-2,2s-2-.897-2-2V3c0-1.103.897-2,2-2s2,.897,2,2v18ZM3,0C1.346,0,0,1.346,0,3v12c0,1.654,1.346,3,3,3s3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm2,15c0,1.103-.897,2-2,2s-2-.897-2-2V3c0-1.103.897-2,2-2s2,.897,2,2v12ZM12,0c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3s3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm2,9c0,1.103-.897,2-2,2s-2-.897-2-2V3c0-1.103.897-2,2-2s2,.897,2,2v6Z"/>
</svg>

);
