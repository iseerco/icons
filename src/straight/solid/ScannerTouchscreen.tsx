import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScannerTouchscreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,4V0h2v4h-2Zm6,2.003V0h-2v4.418c.796.349,1.484.899,2,1.586Zm-6,4.997h-6v8h6v-8Zm5-2v12c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3v-12c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3Zm-3,0H3v12h10v-12ZM10,0h-3v4h3V0Zm8,14h2V0h-2v14ZM21,0v14h3V0h-3Z"/>
</svg>

);
