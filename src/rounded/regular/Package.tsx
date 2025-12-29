import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Package = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 8h-4a3 3 0 0 0 -3 3v5h-2v-4a6 6 0 0 0 -3.107-5.253 4 4 0 1 0 -5.786 0 6 6 0 0 0 -3.107 5.253v11a1 1 0 0 0 2 0v-5h20v5a1 1 0 0 0 2 0v-12a3 3 0 0 0 -3-3zm-17-4a2 2 0 1 1 2 2 2 2 0 0 1 -2-2zm2 4a4 4 0 0 1 4 4v4h-8v-4a4 4 0 0 1 4-4zm10 8v-5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v5z"/></svg>
);
