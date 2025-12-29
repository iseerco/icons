import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 24h-13a5.506 5.506 0 0 1 -5.5-5.5v-13a5.506 5.506 0 0 1 5.5-5.5h13a5.506 5.506 0 0 1 5.5 5.5v13a5.506 5.506 0 0 1 -5.5 5.5zm-13-21a2.5 2.5 0 0 0 -2.5 2.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13a2.5 2.5 0 0 0 -2.5-2.5zm5 9a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-4.5-4.5a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm9 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-9 9a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm9 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5z"/></svg>
);
