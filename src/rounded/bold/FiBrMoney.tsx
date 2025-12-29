import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMoney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 21h-13a5.506 5.506 0 0 1 -5.5-5.5v-7a5.506 5.506 0 0 1 5.5-5.5h13a5.506 5.506 0 0 1 5.5 5.5v7a5.506 5.506 0 0 1 -5.5 5.5zm-13-15a2.5 2.5 0 0 0 -2.5 2.5v7a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0 -2.5-2.5zm0 1a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm11.5 1.5a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-10.439 5.939a1.5 1.5 0 1 0 0 2.122 1.5 1.5 0 0 0 0-2.122zm10.439 1.061a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-8.5-3.5a3.5 3.5 0 1 1 3.5 3.5 3.5 3.5 0 0 1 -3.5-3.5z"/></svg>
);
