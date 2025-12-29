import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Multiple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,0H3C1.346,0,0,1.346,0,3v17h20V3c0-1.654-1.346-3-3-3Zm-2,11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2Zm9-4v17H4v-2h18V4.184c1.161.414,2,1.514,2,2.816Z"/>
</svg>

);
