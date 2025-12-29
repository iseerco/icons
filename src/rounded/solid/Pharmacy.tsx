import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pharmacy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 24a4 4 0 0 1 -4-4v-4h-4a4 4 0 0 1 0-8h4v-4a4 4 0 0 1 8 0v4h4a4 4 0 0 1 0 8h-4v4a4 4 0 0 1 -4 4z"/></svg>
);
