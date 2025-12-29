import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BandAid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 10a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm5 1a1 1 0 1 0 -1-1 1 1 0 0 0 1 1zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm4 2a1 1 0 1 0 -1-1 1 1 0 0 0 1 1zm10-5v4a5.006 5.006 0 0 1 -5 5h-14a5.006 5.006 0 0 1 -5-5v-4a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zm-17-3v10h10v-10zm-2 10v-10a3 3 0 0 0 -3 3v4a3 3 0 0 0 3 3zm17-7a3 3 0 0 0 -3-3v10a3 3 0 0 0 3-3z"/></svg>
);
