import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSelfCare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 16.2c0 .659.17 1.291.439 1.889-.276.402-.439.887-.439 1.411v4.5h-3v-4.5c0-2.285 1.401-4.248 3.389-5.077-.243.542-.389 1.14-.389 1.778zm11.611-1.777c.243.542.389 1.14.389 1.778 0 .659-.17 1.291-.439 1.889.276.402.439.887.439 1.411v4.5h3v-4.5c0-2.285-1.401-4.248-3.389-5.077zm.389-8.423c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm-3 0c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-1 8c-1.105 0-2 .985-2 2.2 0-1.215-.895-2.2-2-2.2s-2 .985-2 2.2c0 2.304 4 4.8 4 4.8s4-2.496 4-4.8c0-1.215-.895-2.2-2-2.2z"/></svg>
);
