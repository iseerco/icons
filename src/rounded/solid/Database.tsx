import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Database = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 17h-11v2a1 1 0 0 1 -2 0v-2h-2v2a1 1 0 0 1 -2 0v-2h-1a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6z"/><path d="m21 9h-11v2a1 1 0 0 1 -2 0v-2h-2v2a1 1 0 0 1 -2 0v-2h-1a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6z"/><path d="m21 1h-11v2a1 1 0 0 1 -2 0v-2h-2v2a1 1 0 0 1 -2 0v-2h-1a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6z"/></svg>
);
