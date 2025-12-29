import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Preview = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,24H3c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.449,1,1,1h4v2Zm17-3v-4h-2v4c0,.551-.449,1-1,1h-4v2h4c1.654,0,3-1.346,3-3Zm0-18c0-1.654-1.346-3-3-3h-4v2h4c.551,0,1,.449,1,1v4h2V3ZM2,3c0-.551.449-1,1-1h4V0H3C1.346,0,0,1.346,0,3v4h2V3Zm13,6h-6v6h6v-6Zm8,0h-6v6h6v-6Zm-16,0H1v6h6v-6Z"/>
</svg>

);
