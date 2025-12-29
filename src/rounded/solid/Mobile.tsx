import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 0h-8a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm-7 8a3 3 0 0 1 6 0v4a1 1 0 0 1 -2 0v-1h-2v1a1 1 0 0 1 -2 0zm3 14a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm3-5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-4-8v-1a1 1 0 0 1 2 0v1z"/></svg>
);
