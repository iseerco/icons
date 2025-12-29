import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTimeDelete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.621 19.5 1.94-1.939a1.5 1.5 0 0 0 -2.122-2.122l-1.939 1.94-1.939-1.94a1.5 1.5 0 0 0 -2.122 2.122l1.94 1.939-1.94 1.939a1.5 1.5 0 0 0 2.122 2.122l1.939-1.94 1.939 1.94a1.5 1.5 0 0 0 2.122-2.122z"/><path d="m11.57 20.99a9 9 0 1 1 9.42-9.42 1.5 1.5 0 0 0 3-.14 12 12 0 1 0 -12.56 12.556h.071a1.5 1.5 0 0 0 .069-3z"/><path d="m12 6a1.5 1.5 0 0 0 -1.5 1.5v3.555l-2.4 1.5a1.5 1.5 0 0 0 -.475 2.068 1.5 1.5 0 0 0 2.068.475l2.869-1.8a2 2 0 0 0 .938-1.7v-4.098a1.5 1.5 0 0 0 -1.5-1.5z"/></svg>
);
