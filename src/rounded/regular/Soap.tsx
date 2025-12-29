import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Soap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 7.964v-.964a3 3 0 0 0 -2-2.816v-2.184h4a1 1 0 0 0 0-2h-7a3 3 0 0 0 -3 3v1.184a3 3 0 0 0 -2 2.816v.964a8.943 8.943 0 0 0 -5 8.036v2a6.006 6.006 0 0 0 6 6h8a6.006 6.006 0 0 0 6-6v-2a8.943 8.943 0 0 0 -5-8.036zm-6-4.964a1 1 0 0 1 1-1h1v2h-2zm-2 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h-6zm11 11a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4-4v-2a6.968 6.968 0 0 1 3.394-6h9.212a6.968 6.968 0 0 1 3.394 6zm-5-4h-6a3 3 0 0 0 0 6h6a3 3 0 0 0 0-6zm0 4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/></svg>
);
