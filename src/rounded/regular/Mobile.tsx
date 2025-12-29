import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 0h-8a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm3 19a3 3 0 0 1 -3 3h-3v-1a1 1 0 0 0 -2 0v1h-3a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm-3-3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-6-3a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 2 0v-4a3 3 0 0 0 -6 0v4a1 1 0 0 0 1 1zm2-6a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 1-1z"/></svg>
);
