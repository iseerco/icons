import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCursorFinger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 7.829v-3.829a4 4 0 0 0 -8 0v5.872l-3.975 3.91a3.5 3.5 0 0 0 0 4.95l5.267 5.268h14.708v-14.171zm5 13.171h-10.464l-4.39-4.39a.5.5 0 0 1 -.146-.353.487.487 0 0 1 .138-.344l1.862-1.833v1.92h3v-12a1 1 0 0 1 2 0v6.171l8 2z"/></svg>
);
