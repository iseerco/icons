import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScannerTouchscreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,4h-2V0h2v4Zm2,.418c.796.349,1.484.899,2,1.586V0h-2v4.418Zm1,4.582v12c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3v-12c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v12c0,.551.449,1,1,1h10c.551,0,1-.449,1-1v-12Zm-10,1h8v10H4v-10Zm2,8h4v-6h-4v6ZM10,0h-3v4h3V0Zm8,14h2V0h-2v14ZM21,0v14h3V0h-3Z"/>
</svg>

);
