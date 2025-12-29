import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DataTransfer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 3v6h-5v2h2v2h-6v-2h2v-2h-5v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zm6 3v3h2v-3a3 3 0 0 0 -3-3h-3v2h3a1 1 0 0 1 1 1zm-11 12v-3h-2v3a3 3 0 0 0 3 3h4v-2h-4a1 1 0 0 1 -1-1zm17-4v10h-10v-10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zm-4 6a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);
