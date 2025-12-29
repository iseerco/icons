import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCoworking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 6.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm5 7c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v4c0 1.381 1.119 2.5 2.5 2.5h3.5v4h3v-7h-4zm16.5-4.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zm0 2c-1.381 0-2.5 1.119-2.5 2.5v3.5h-4v7h3v-4h3.5c1.381 0 2.5-1.119 2.5-2.5v-4c0-1.381-1.119-2.5-2.5-2.5zm-4.5 1h-1.5v-2.47c0-1.397-1.133-2.53-2.53-2.53h-1.94c-1.397 0-2.53 1.133-2.53 2.53v2.47h-1.5v3h10zm3 12h4v-3h-4zm-20 0h4v-3h-4zm12-19c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5z"/></svg>
);
