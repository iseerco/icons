import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Backpack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 12h-6v-2h6zm9 1v6a5.006 5.006 0 0 1 -5 5h-14a5.006 5.006 0 0 1 -5-5v-6h4v-1a8 8 0 0 1 4-6.918v-1.082a4 4 0 0 1 8 0v1.082a8 8 0 0 1 4 6.918v1zm-14-8.737a7.736 7.736 0 0 1 4 0v-.263a2 2 0 0 0 -4 0zm-4 7.737v4.726a7.966 7.966 0 0 1 12 0v-4.726a6 6 0 0 0 -12 0zm-2 9.816v-6.816h-2v4a3 3 0 0 0 2 2.816zm2 .184h12a6 6 0 0 0 -12 0zm16-7h-2v6.816a3 3 0 0 0 2-2.816z"/></svg>
);
