import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IdBadge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 4h-6v-1a3 3 0 0 0 -6 0v1h-6a3 3 0 0 0 -3 3v17h24v-17a3 3 0 0 0 -3-3zm-10-1a1 1 0 0 1 2 0v3h-2zm11 19h-20v-15a1 1 0 0 1 1-1h6v2h6v-2h6a1 1 0 0 1 1 1zm-18-2h7v-10h-7zm2-8h3v6h-3zm7 2h7v2h-7zm0-4h7v2h-7zm0 8h5v2h-5z"/></svg>
);
