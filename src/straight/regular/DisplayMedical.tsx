import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplayMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.021,19V6c0-1.654-1.346-3-3-3H3.021C1.367,3,.021,4.346.021,6v13h11v1h-4v2h10v-2h-4v-1h11ZM2.021,6c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v11H2.021V6Zm11,4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Z"/>
</svg>

);
