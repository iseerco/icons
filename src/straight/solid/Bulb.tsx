import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bulb = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.868 15.583a8.938 8.938 0 0 1 -2.793-7.761 9 9 0 1 1 14.857 7.941 5.748 5.748 0 0 0 -1.804 3.237h-3.128v-8.184a3 3 0 0 0 2-2.816h-2a1 1 0 0 1 -2 0h-2a3 3 0 0 0 2 2.816v8.184h-3.125a6.538 6.538 0 0 0 -2.007-3.417zm2.132 5.417v3h8v-3z"/></svg>
);
