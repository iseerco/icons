import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cursor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.008 24a3.007 3.007 0 0 1 -2.681-1.636l-3.127-6.704-3.542 3.093a1 1 0 0 1 -1.658-.753v-15.02a3 3 0 0 1 4.989-2.246l10.7 10.238a1 1 0 0 1 -.6 1.719l-4.468.407 3.065 6.569a3 3 0 0 1 -2.678 4.333z"/></svg>
);
