import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 22h-14.116a6.934 6.934 0 0 0 1.116-4v-4h7a1 1 0 0 0 0-2h-7v-4a6 6 0 0 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0 -16 0v4h-2a1 1 0 0 0 0 2h2v4c0 1.2-.292 4-3 4a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/></svg>
);
