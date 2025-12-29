import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 21h-24v-14.5a3.5 3.5 0 0 1 3.5-3.5h17a3.5 3.5 0 0 1 3.5 3.5zm-21-3h18v-11.5a.5.5 0 0 0 -.5-.5h-17a.5.5 0 0 0 -.5.5zm9-3a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm-6.5-8a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm11.5 1.5a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-11.5 5.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm11.5 1.5a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5z"/></svg>
);
