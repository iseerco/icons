import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transform = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 24h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0v1a5.006 5.006 0 0 1 -5 5zm5-18v-1a5.006 5.006 0 0 0 -5-5h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0zm-17 17a1 1 0 0 0 -1-1h-1a3 3 0 0 1 -3-3v-1a1 1 0 0 0 -2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 1-1zm-5-17v-1a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2h-1a5.006 5.006 0 0 0 -5 5v1a1 1 0 0 0 2 0zm14 6a4 4 0 1 0 -4 4 4 4 0 0 0 4-4z"/></svg>
);
