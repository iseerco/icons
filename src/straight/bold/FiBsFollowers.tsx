import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFollowers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 19h2v3h-2v2h-3v-2c0-1.654 1.346-3 3-3zm1.5-8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm16.5 8h-2v3h2v2h3v-2c0-1.654-1.346-3-3-3zm1.5-5c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm-10.5 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm2 2h-4c-1.654 0-3 1.346-3 3v5h3v-5h4v5h3v-5c0-1.654-1.346-3-3-3zm7-13v-3h-3v3h-3v3h3v3h3v-3h3v-3z"/></svg>
);
