import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBilliard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1 -12 12zm0-21a9 9 0 1 0 9 9 9.01 9.01 0 0 0 -9-9zm0 3a6 6 0 1 0 6 6 6 6 0 0 0 -6-6zm3.083 5.016-2.733 5.638-2.7-1.308 1.622-3.346h-2.272v-3h6.083z"/></svg>
);
