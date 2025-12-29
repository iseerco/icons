import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4v-1h-3V0h-1v3H4V0h-1v3H0v1h3v16H0v1h3v3h1v-3h16v3h1v-3h3v-1h-3V4h3Zm-4,16H4V4h16v16Z"/>
</svg>

);
