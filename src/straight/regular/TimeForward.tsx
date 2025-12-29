import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12.03 12.03 0 0 1 8 3.078v-3.078h2v5.143a1.859 1.859 0 0 1 -1.857 1.857h-5.143v-2h4.121a9.985 9.985 0 1 0 2.879 7h2a12 12 0 1 1 -12-12z"/><path d="m11 7v5.414l3.293 3.293 1.414-1.414-2.707-2.707v-4.586z"/></svg>
);
