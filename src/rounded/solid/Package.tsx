import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Package = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 11v12a1 1 0 0 1 -2 0v-5h-20v5a1 1 0 0 1 -2 0v-10.5a5.5 5.5 0 0 1 11 0v3.5h3v-5a3 3 0 0 1 3-3h1v2a1 1 0 0 0 2 0v-2h1a3 3 0 0 1 3 3zm-15-7.5a3.5 3.5 0 1 0 -3.5 3.5 3.5 3.5 0 0 0 3.5-3.5z"/></svg>
);
