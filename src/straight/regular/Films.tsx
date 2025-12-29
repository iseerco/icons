import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Films = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,21h17v2H0v-14c0-1.654,1.346-3,3-3v2c-.551,0-1,.448-1,1v12ZM24,4v15H5V4c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3Zm-3-1h-1v2h2v-1c0-.552-.449-1-1-1Zm-12,4h-2v2h2v-2Zm-2,4v2h2v-2h-2Zm4,6h7V3h-7v14Zm9-4h2v-2h-2v2Zm2-4v-2h-2v2h2ZM7,4v1h2v-2h-1c-.551,0-1,.448-1,1Zm0,13h2v-2h-2v2Zm15,0v-2h-2v2h2Z"/>
</svg>

);
