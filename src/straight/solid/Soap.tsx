import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Soap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 2v2h2v3h-10v-3h2v-1a3 3 0 0 1 3-3h8v2zm1 14h-8v2h8zm6 1v7h-20v-7a8.942 8.942 0 0 1 4.928-8h10.144a8.942 8.942 0 0 1 4.928 8zm-4-3h-12v6h12z"/></svg>
);
