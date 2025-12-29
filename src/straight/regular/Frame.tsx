import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Frame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5v-2h-3V0h-2v3H5V0h-2v3H0v2h3v14H0v2h3v3h2v-3h14v3h2v-3h3v-2h-3V5h3Zm-5,14H5V5h14v14Z"/>
</svg>

);
