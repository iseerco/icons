import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Game = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 4h-10a3 3 0 0 0 -3 3v17h16v-17a3 3 0 0 0 -3-3zm-5 14s-4-2.667-4-5a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 2.333-4 5-4 5zm15.88-11.307-4.78 16.414-1.1-.407v-15.7a5.006 5.006 0 0 0 -5-5h-4.243a2.978 2.978 0 0 1 3.657-1.879l9.436 2.856a3 3 0 0 1 2.03 3.716z"/></svg>
);
