import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTransform = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 24h-1a1.5 1.5 0 0 1 0-3h1a2.5 2.5 0 0 0 2.5-2.5v-1a1.5 1.5 0 0 1 3 0v1a5.506 5.506 0 0 1 -5.5 5.5zm5.5-17.5v-1a5.506 5.506 0 0 0 -5.5-5.5h-1a1.5 1.5 0 0 0 0 3h1a2.5 2.5 0 0 1 2.5 2.5v1a1.5 1.5 0 0 0 3 0zm-16 16a1.5 1.5 0 0 0 -1.5-1.5h-1a2.5 2.5 0 0 1 -2.5-2.5v-1a1.5 1.5 0 0 0 -3 0v1a5.506 5.506 0 0 0 5.5 5.5h1a1.5 1.5 0 0 0 1.5-1.5zm-5-16v-1a2.5 2.5 0 0 1 2.5-2.5h1a1.5 1.5 0 0 0 0-3h-1a5.506 5.506 0 0 0 -5.5 5.5v1a1.5 1.5 0 0 0 3 0zm13 5.5a4 4 0 1 0 -4 4 4 4 0 0 0 4-4z"/></svg>
);
