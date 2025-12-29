import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSweep = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3.333 4.667-2.333-1.167 2.333-1.167 1.167-2.333 1.167 2.333 2.333 1.167-2.333 1.167-1.167 2.333zm17.667 8.833v6c0 2.481-2.019 4.5-4.5 4.5h-15.5v-3h.5c.827 0 1.5-.673 1.5-1.5v-6c0-1.93 1.57-3.5 3.5-3.5h4v-10h3v10h4c1.93 0 3.5 1.57 3.5 3.5zm-3 6v-4.5h-2v4h-3v-4h-2v4h-3v-4h-2v4.5c0 .526-.091 1.031-.257 1.5h10.757c.827 0 1.5-.673 1.5-1.5zm3.5-15-1-2-1 2-2 1 2 1 1 2 1-2 2-1z"/></svg>
);
