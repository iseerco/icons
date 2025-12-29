import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 24h-24v-20.5a3.5 3.5 0 0 1 3.5-3.5h17a3.5 3.5 0 0 1 3.5 3.5zm-21-3h18v-17.5a.5.5 0 0 0 -.5-.5h-17a.5.5 0 0 0 -.5.5zm7.5-9a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-4.5-4.5a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm9 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-9 9a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm9 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5z"/></svg>
);
