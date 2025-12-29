import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5 0c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zm4.207 7.207-3.707 3.793v-3h-4v-3h4v-3l3.707 3.793c.39.39.39 1.024 0 1.414zm-8.707 14.793v2h-3v-2c0-.552-.448-1-1-1h-5c-.552 0-1 .448-1 1v2h-3v-2c0-2.206 1.794-4 4-4h5c2.206 0 4 1.794 4 4zm-10.5-10c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z"/></svg>
);
