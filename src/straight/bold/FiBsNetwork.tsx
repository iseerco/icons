import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNetwork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 19h-8.85a3.5 3.5 0 0 0 -1.65-1.65v-3.35h5.5a3 3 0 0 0 3-3v-2h-1v-5.5a3.5 3.5 0 0 0 -3.5-3.5h-11a3.5 3.5 0 0 0 -3.5 3.5v5.5h-1v2a3 3 0 0 0 3 3h5.5v3.35a3.5 3.5 0 0 0 -1.65 1.65h-8.85v3h8.85a3.481 3.481 0 0 0 6.3 0h8.85zm-14.586-10h-3.414v-5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v5.5h-3.414l-1 1h-3.172z"/></svg>
);
