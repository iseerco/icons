import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPlayAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 24h-13a5.506 5.506 0 0 1 -5.5-5.5v-13a5.506 5.506 0 0 1 5.5-5.5h13a5.506 5.506 0 0 1 5.5 5.5v13a5.506 5.506 0 0 1 -5.5 5.5zm-13-21a2.5 2.5 0 0 0 -2.5 2.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13a2.5 2.5 0 0 0 -2.5-2.5zm2.492 6.339v5.322a1.337 1.337 0 0 0 2 1.161l5.327-2.661a1.337 1.337 0 0 0 0-2.322l-5.327-2.661a1.337 1.337 0 0 0 -2 1.161z"/></svg>
);
