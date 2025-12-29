import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSignalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3s3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm2,21c0,1.103-.897,2-2,2s-2-.897-2-2V3c0-1.103.897-2,2-2s2,.897,2,2v18ZM12,6c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3s3-1.346,3-3v-12c0-1.654-1.346-3-3-3Zm2,15c0,1.103-.897,2-2,2s-2-.897-2-2v-12c0-1.103.897-2,2-2s2,.897,2,2v12Zm-8-6v6c0,1.654-1.346,3-3,3s-3-1.346-3-3v-6c0-1.654,1.346-3,3-3s3,1.346,3,3Z"/>
</svg>

);
