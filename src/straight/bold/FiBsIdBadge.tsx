import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIdBadge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 4h-5.5v-1a3 3 0 0 0 -6 0v1h-5.5a3.5 3.5 0 0 0 -3.5 3.5v16.5h24v-16.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 17h-18v-13.5a.5.5 0 0 1 .5-.5h5.5v2h6v-2h5.5a.5.5 0 0 1 .5.5zm-16-10h5v8h-5zm7 0h7v3h-7zm0 5h5v3h-5z"/></svg>
);
