import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsListCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4 7a3.477 3.477 0 0 1 -2.475-1.025l-1.586-1.585 2.122-2.122 1.585 1.585a.5.5 0 0 0 .707 0l3.586-3.585 2.122 2.121-3.586 3.586a3.477 3.477 0 0 1 -2.475 1.025zm20-5h-12v3h12zm-17.525 11.975 3.586-3.586-2.122-2.121-3.586 3.586a.5.5 0 0 1 -.707 0l-1.585-1.586-2.122 2.122 1.586 1.585a3.5 3.5 0 0 0 4.95 0zm17.525-3.975h-12v3h12zm-17.525 11.975 3.586-3.586-2.122-2.121-3.586 3.586a.5.5 0 0 1 -.707 0l-1.585-1.586-2.122 2.122 1.586 1.585a3.5 3.5 0 0 0 4.95 0zm17.525-3.975h-12v3h12z"/></svg>
);
