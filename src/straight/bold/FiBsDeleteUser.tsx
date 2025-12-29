import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDeleteUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.121 11 1.94 1.939-2.122 2.122-1.939-1.94-1.939 1.94-2.122-2.122 1.94-1.939-1.94-1.939 2.122-2.122 1.939 1.94 1.939-1.94 2.122 2.122zm-20.121-5a6 6 0 1 1 6 6 6.006 6.006 0 0 1 -6-6zm3 0a3 3 0 1 0 3-3 3 3 0 0 0 -3 3zm6 8h-6a5.006 5.006 0 0 0 -5 5v5h3v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5h3v-5a5.006 5.006 0 0 0 -5-5z"/></svg>
);
