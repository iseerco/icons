import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Filter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 24-6-4.5v-5.12l-8-9v-2.38a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2.38l-8 9zm-4-5.5 2 1.5v-6.38l8-9v-1.62a1 1 0 0 0 -1-1h-16a1 1 0 0 0 -1 1v1.62l8 9z"/></svg>
);
