import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scale = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 5a5 5 0 0 1 10 0 2 2 0 0 1 -2 2h-2.8l1.63-2.445a1 1 0 0 0 -1.664-1.11l-2.366 3.555h-.8a2 2 0 0 1 -2-2zm12-3h-.674a6.987 6.987 0 0 1 .674 3 4 4 0 0 1 -4 4h-6.534l.008-.013a3.79 3.79 0 0 1 -3.474-3.772 7.432 7.432 0 0 1 .747-3.215h-.747a5 5 0 0 0 -5 5v12a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-12a5 5 0 0 0 -5-5z"/></svg>
);
