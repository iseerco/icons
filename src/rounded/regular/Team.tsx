import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Team = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 9c0-1.654-1.346-3-3-3h-3c-.9 0-1.7.407-2.25 1.037-.55-.63-1.35-1.037-2.25-1.037h-3c-.9 0-1.7.407-2.25 1.037-.55-.63-1.35-1.037-2.25-1.037h-3c-1.654 0-3 1.346-3 3v8h2v7h2v-7h1v7h2v-7h2.5v7h2v-7h1v7h2v-7h2.5v7h2v-7h1v7h2v-7h2zm-17 6h-5v-6c0-.552.449-1 1-1h3c.551 0 1 .448 1 1zm7.5 0h-5v-6c0-.552.449-1 1-1h3c.551 0 1 .448 1 1zm7.5 0h-5v-6c0-.552.449-1 1-1h3c.551 0 1 .448 1 1zm-5-12.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm-7.5 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm-7.5 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5z"/></svg>
);
