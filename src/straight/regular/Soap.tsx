import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Soap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 7.964v-3.964h-2v-2h5v-2h-8a3 3 0 0 0 -3 3v1h-2v3.964a8.943 8.943 0 0 0 -5 8.036v8h20v-8a8.943 8.943 0 0 0 -5-8.036zm-6-4.964a1 1 0 0 1 1-1h1v2h-2zm-2 3h6v2h-6zm11 16h-16v-6a6.97 6.97 0 0 1 3.394-6h9.212a6.97 6.97 0 0 1 3.394 6zm-14-2h12v-6h-12zm2-4h8v2h-8z"/></svg>
);
