import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Soap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 17a1 1 0 0 1 -1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm6 0v1a6.006 6.006 0 0 1 -6 6h-8a6.006 6.006 0 0 1 -6-6v-1a8.942 8.942 0 0 1 4.928-8h10.144a8.942 8.942 0 0 1 4.928 8zm-4 0a3 3 0 0 0 -3-3h-6a3 3 0 0 0 0 6h6a3 3 0 0 0 3-3zm-1-11a2 2 0 0 0 -2-2v-2h4a1 1 0 0 0 0-2h-7a3 3 0 0 0 -3 3v1a2 2 0 0 0 -2 2v1h10z"/></svg>
);
