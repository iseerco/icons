import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Umbrella = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 14a12.009 12.009 0 0 0 -11-11.949v-2.051h-2v2.051a12.009 12.009 0 0 0 -11 11.949v1h11v6a1 1 0 0 1 -2 0h-2a3 3 0 0 0 6 0v-6h11z"/></svg>
);
