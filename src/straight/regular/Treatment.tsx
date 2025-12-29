import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Treatment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 8h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm-6 8h10v-2h-10zm0 4h6v-2h-6zm14-18v19a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3-3v-19h5.171a3.006 3.006 0 0 1 2.829-2h2a3.006 3.006 0 0 1 2.829 2zm-2 2h-5v-1a1 1 0 0 0 -1-1h-2a1 1 0 0 0 -1 1v1h-5v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></svg>
);
