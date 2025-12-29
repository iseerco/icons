import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBulb = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.994 2.287a9 9 0 0 0 -14.92 5.538 9.807 9.807 0 0 0 3.107 8.1 5.32 5.32 0 0 1 1.819 3.875v4.2h8v-4.048a6.166 6.166 0 0 1 1.933-4.188 9 9 0 0 0 .061-13.477zm-2.039 11.221a8.637 8.637 0 0 0 -1.909 2.492h-.546v-4.3a4 4 0 0 0 2.5-3.7h-3a1 1 0 0 1 -2 0h-3a4 4 0 0 0 2.5 3.7v4.3h-.5a9.048 9.048 0 0 0 -1.773-2.269 6.941 6.941 0 0 1 -2.176-5.526 6.02 6.02 0 0 1 5.243-5.165 6 6 0 0 1 4.661 10.468z"/></svg>
);
