import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScale = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 2h-4.04a5.973 5.973 0 0 0 -8.92 0h-4.04a3.5 3.5 0 0 0 -3.5 3.5v18.5h24v-18.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 19h-18v-15.5a.5.5 0 0 1 .5-.5h2.59a6 6 0 0 0 -.09 1v2h3.291l2.427-5 2.682 1.342-1.7 3.658h5.3v-2a6 6 0 0 0 -.09-1h2.59a.5.5 0 0 1 .5.5z"/></svg>
);
