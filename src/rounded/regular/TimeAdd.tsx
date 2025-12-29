import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23 18h-3v-3a1 1 0 0 0 -2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"/><path d="m11 7v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 .293-.707v-5a1 1 0 0 0 -2 0z"/><path d="m14.728 21.624a9.985 9.985 0 1 1 6.9-6.895 1 1 0 1 0 1.924.542 11.989 11.989 0 1 0 -8.276 8.277 1 1 0 1 0 -.544-1.924z"/></svg>
);
