import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 0h-13a5.507 5.507 0 0 0 -5.5 5.5v5a7.508 7.508 0 0 0 7.5 7.5h.5v2a4 4 0 0 0 8 0v-2h.5a7.508 7.508 0 0 0 7.5-7.5v-5a5.507 5.507 0 0 0 -5.5-5.5zm-13 3h.5v.5a1.5 1.5 0 0 0 3 0v-.5h2v2.5a1.5 1.5 0 0 0 3 0v-2.5h2v4.5a1.5 1.5 0 0 0 3 0v-4.449a2.5 2.5 0 0 1 2 2.449v4.5h-18v-4.5a2.5 2.5 0 0 1 2.5-2.5zm11 12h-2a1.5 1.5 0 0 0 -1.5 1.5v3.5a1 1 0 0 1 -2 0v-3.5a1.5 1.5 0 0 0 -1.5-1.5h-2a4.5 4.5 0 0 1 -3.738-2h16.476a4.5 4.5 0 0 1 -3.738 2z"/></svg>
);
