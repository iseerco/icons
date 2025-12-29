import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm2.5 2h-5c-1.93 0-3.5 1.57-3.5 3.5v2.5h12v-2.5c0-1.93-1.57-3.5-3.5-3.5zm-2.5-2c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm11.5-16c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm3.187 7.197-2.687 2.687v-2.385h-4v-2h4v-2.499l2.687 2.687c.417.417.417 1.093 0 1.51z"/></svg>
);
