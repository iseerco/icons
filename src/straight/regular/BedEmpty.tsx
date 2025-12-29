import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,11H2V2H0v20h2v-3h20v3h2v-8c0-1.654-1.346-3-3-3ZM2,17v-4h19c.552,0,1,.449,1,1v3H2Z"/>
</svg>

);
