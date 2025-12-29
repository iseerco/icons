import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Preview = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,22h4v2H3c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.449,1,1,1Zm19-1c0,.551-.449,1-1,1h-4v2h4c1.654,0,3-1.346,3-3v-4h-2v4ZM21,0h-4v2h4c.551,0,1,.449,1,1v4h2V3c0-1.654-1.346-3-3-3ZM0,3v4h2V3c0-.551.449-1,1-1h4V0H3C1.346,0,0,1.346,0,3Zm9,6h6v6h-6v-6Zm2,4h2v-2h-2v2Zm12,2h-6v-6h6v6Zm-2-4h-2v2h2v-2ZM1,9h6v6H1v-6Zm2,4h2v-2h-2v2Z"/>
</svg>

);
