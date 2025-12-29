import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Badge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 8a8 8 0 1 0 -14 5.274v8.226a2.5 2.5 0 0 0 4.062 1.952l1.938-1.552 1.938 1.55a2.5 2.5 0 0 0 4.062-1.95v-8.226a7.957 7.957 0 0 0 2-5.274zm-8-6a6 6 0 1 1 -6 6 6.006 6.006 0 0 1 6-6zm3.717 19.948a.491.491 0 0 1 -.529-.06l-3.188-2.551-3.187 2.551a.5.5 0 0 1 -.813-.388v-6.582a7.935 7.935 0 0 0 8 0v6.582a.487.487 0 0 1 -.283.448z"/></svg>
);
