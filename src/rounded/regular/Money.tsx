import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Money = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 20h-14a5.006 5.006 0 0 1 -5-5v-6a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v6a5.006 5.006 0 0 1 -5 5zm-14-14a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a3 3 0 0 0 -3-3zm7 10a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2zm-7-2a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-13 5a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z"/></svg>
);
