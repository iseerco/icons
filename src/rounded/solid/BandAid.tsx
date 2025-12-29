import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BandAid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 19a5.006 5.006 0 0 1 -5-5v-4a5.006 5.006 0 0 1 5-5zm2-14h10v14h-10zm4 9a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm2-4a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm0 4a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-4-4a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm10-5v14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0 -5-5z"/></svg>
);
