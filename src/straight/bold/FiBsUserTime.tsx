import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5 11a5.5 5.5 0 1 0 -5.5-5.5 5.506 5.506 0 0 0 5.5 5.5zm0-8a2.5 2.5 0 1 1 -2.5 2.5 2.5 2.5 0 0 1 2.5-2.5z"/><path d="m17 10a6.987 6.987 0 0 0 -5.74 3h-6.26a5.006 5.006 0 0 0 -5 5v6h3v-6a2 2 0 0 1 2-2h5.08a7 7 0 1 0 6.92-6zm1.439 11.061-3.439-3.44v-4.621h3v3.379l2.561 2.56z"/></svg>
);
