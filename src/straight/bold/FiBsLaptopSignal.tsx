import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLaptopSignal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 19h2v2c0 1.657-1.343 3-3 3h-18c-1.657 0-3-1.343-3-3v-2h2v-13h9v3h-6v10h3.308l.923 1h5.538l.923-1h3.308v-8h3zm-1-19v9h3v-9zm-1 2h-3v7h3zm-4 2h-3v5h3z"/></svg>
);
