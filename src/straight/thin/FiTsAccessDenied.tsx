import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAccessDenied = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 18v-4h1v4zm15-.5c0 3.584-2.916 6.5-6.5 6.5s-6.5-2.916-6.5-6.5 2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5zm-1 0c0-3.032-2.468-5.5-5.5-5.5s-5.5 2.468-5.5 5.5 2.468 5.5 5.5 5.5 5.5-2.468 5.5-5.5zm-3.51-2.697-1.99 1.99-1.99-1.99-.707.707 1.99 1.99-1.99 1.99.707.707 1.99-1.99 1.99 1.99.707-.707-1.99-1.99 1.99-1.99zm-9.186 8.197c.323.359.669.696 1.045 1h-8.849c-1.378 0-2.5-1.121-2.5-2.5v-13.5h3v-1.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5v1.5h3v1h-18v12.5c0 .827.673 1.5 1.5 1.5zm-6.304-15h11v-1.5c0-3.033-2.467-5.5-5.5-5.5s-5.5 2.467-5.5 5.5z"/></svg>
);
