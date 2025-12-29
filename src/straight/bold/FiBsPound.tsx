import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 17v-3h7v-3h-7v-3a5 5 0 0 1 10 0h3a8 8 0 0 0 -16 0v3h-3v3h3v3a3.758 3.758 0 0 1 -4 4v3h20v-3h-14.147a7.213 7.213 0 0 0 1.147-4z"/></svg>
);
