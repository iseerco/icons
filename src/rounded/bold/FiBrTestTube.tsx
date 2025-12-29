import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTestTube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5 0h-11a1.5 1.5 0 0 0 0 3h.5v16a5 5 0 0 0 10 0v-16h.5a1.5 1.5 0 0 0 0-3zm-5.5 21a2 2 0 0 1 -2-2v-9h4v9a2 2 0 0 1 -2 2zm2-14h-4v-4h4z"/></svg>
);
