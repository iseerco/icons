import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSignalAlt2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3v18c0,1.654-1.346,3-3,3s-3-1.346-3-3V3c0-1.654,1.346-3,3-3s3,1.346,3,3Zm-12,3c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3s3-1.346,3-3v-12c0-1.654-1.346-3-3-3ZM3,12c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3s3-1.346,3-3v-6c0-1.654-1.346-3-3-3Z"/>
</svg>

);
