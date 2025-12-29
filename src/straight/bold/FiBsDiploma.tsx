import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiploma = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 15.5a4.5 4.5 0 0 0 -2-3.738v-8.262a3.5 3.5 0 0 0 -3.5-3.5h-13a3.5 3.5 0 0 0 -3.5 3.5v18.5h12v-3h-9v-15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7.551a4.481 4.481 0 0 0 -2 8.187v4.762l2.5-2.5 2.5 2.5v-4.762a4.5 4.5 0 0 0 2-3.738zm-4.5-1.5a1.5 1.5 0 1 1 -1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm-2.5-6h-10v-3h10zm-10 2h6v3h-6z"/></svg>
);
