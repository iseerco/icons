import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8 18v-4h8v-2h-8v-4a6 6 0 0 1 12 0h2a8 8 0 0 0 -16 0v4h-3v2h3v4a4 4 0 0 1 -4 4v2h20v-2h-15.54a5.969 5.969 0 0 0 1.54-4z"/></svg>
);
