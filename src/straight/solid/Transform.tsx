import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transform = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 24h-6v-2h4v-4h2zm0-21a3 3 0 0 0 -3-3h-3v2h3a1 1 0 0 1 1 1v3h2zm-18 19h-4v-4h-2v6h6zm-4-19a1 1 0 0 1 1-1h3v-2h-3a3 3 0 0 0 -3 3v3h2zm14 9a4 4 0 1 0 -4 4 4 4 0 0 0 4-4z"/></svg>
);
