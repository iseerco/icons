import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DataTransfer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 4v1a4 4 0 0 1 -4 4h-1v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h2v-2h-1a4 4 0 0 1 -4-4v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4zm3 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 2 0v-2a3 3 0 0 0 -3-3h-2a1 1 0 0 0 0 2zm-4 14h-3a1 1 0 0 1 -1-1v-2a1 1 0 0 0 -2 0v2a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2zm13-4v5a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4-4v-5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4zm-4 5a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);
