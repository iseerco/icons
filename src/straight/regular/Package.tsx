import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Package = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 16h-2v-4a6 6 0 0 0 -3.107-5.253 4 4 0 1 0 -5.786 0 6 6 0 0 0 -3.107 5.253v12h2v-6h20v6h2v-16h-10zm-10-12a2 2 0 1 1 2 2 2 2 0 0 1 -2-2zm-2 8a4 4 0 0 1 8 0v4h-8zm16-2v2h2v-2h2v6h-6v-6z"/></svg>
);
