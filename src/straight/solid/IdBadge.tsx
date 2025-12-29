import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IdBadge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 4h-6v-1a3 3 0 0 0 -6 0v1h-6a3 3 0 0 0 -3 3v17h24v-17a3 3 0 0 0 -3-3zm-11 15h-7v-10h7zm1-16a1 1 0 0 1 2 0v3h-2zm8 16h-6v-2h6zm2-4h-8v-2h8zm0-4h-8v-2h8zm-13 6h-3v-6h3z"/></svg>
);
