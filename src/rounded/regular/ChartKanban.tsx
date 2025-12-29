import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3s3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm1,21c0,.551-.448,1-1,1s-1-.449-1-1V3c0-.551.448-1,1-1s1,.449,1,1v18ZM3,0C1.346,0,0,1.346,0,3v13c0,1.654,1.346,3,3,3s3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm1,16c0,.551-.449,1-1,1s-1-.449-1-1V3c0-.551.449-1,1-1s1,.449,1,1v13ZM12,0c-1.654,0-3,1.346-3,3v7c0,1.654,1.346,3,3,3s3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm1,10c0,.551-.449,1-1,1s-1-.449-1-1V3c0-.551.449-1,1-1s1,.449,1,1v7Z"/>
</svg>

);
