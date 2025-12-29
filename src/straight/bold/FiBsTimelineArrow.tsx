import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTimelineArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.707 12.707-3.707 3.793v-3h-10v3.5h2v7h-7v-7h2v-3.5h-7v-3h2v-3.5h-2v-7h7v7h-2v3.5h7v-3.5h-2v-7h7v7h-2v3.5h5v-3l3.707 3.793c.391.391.391 1.024 0 1.414z"/></svg>
);
