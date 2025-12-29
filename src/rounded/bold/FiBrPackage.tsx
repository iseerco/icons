import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPackage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 7h-4a3.5 3.5 0 0 0 -3.5 3.5v4.5h-2v-3.5a5.507 5.507 0 0 0 -3.513-5.123 3.5 3.5 0 1 0 -3.974 0 5.507 5.507 0 0 0 -3.513 5.123v11a1.5 1.5 0 0 0 3 0v-4.5h18v4.5a1.5 1.5 0 0 0 3 0v-12a3.5 3.5 0 0 0 -3.5-3.5zm-15 2a2.5 2.5 0 0 1 2.5 2.5v3.5h-5v-3.5a2.5 2.5 0 0 1 2.5-2.5zm10.5 6v-4.5a.5.5 0 0 1 .5-.5h.5v.5a1.5 1.5 0 0 0 3 0v-.5h.5a.5.5 0 0 1 .5.5v4.5z"/></svg>
);
