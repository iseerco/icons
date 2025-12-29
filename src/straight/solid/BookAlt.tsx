import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.922 1.7a3.017 3.017 0 0 0 -2.516-.636l-4.122 1a4 4 0 0 0 -3.284 3.936v14.8l-1 .181-1-.181v-14.8a3.979 3.979 0 0 0 -3.227-3.923l-4.237-1.028a3 3 0 0 0 -3.536 2.951v16.834l12 2.183 12-2.183v-16.834a2.992 2.992 0 0 0 -1.078-2.3z"/></svg>
);
