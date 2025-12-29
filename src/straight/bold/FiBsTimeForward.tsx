import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTimeForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12.032 12.032 0 0 1 8.471 3.529l2.529-2.529v5.909a1.09 1.09 0 0 1 -1.091 1.091h-5.909l2.353-2.353a8.985 8.985 0 1 0 2.647 6.353h3a12 12 0 1 1 -12-12z"/><path d="m10 7v6.621l3.439 3.44 2.122-2.122-2.561-2.56v-5.379z"/></svg>
);
