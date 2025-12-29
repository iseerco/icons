import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCursorPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.5 7a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0 -8.5-8.5zm0 14a5.5 5.5 0 1 1 5.5-5.5 5.507 5.507 0 0 1 -5.5 5.5zm1.5-7h2v3h-2v2h-3v-2h-2v-3h2v-2h3zm-9.816-6.816-2.737 5.816-4.447-13 13 4.447z"/></svg>
);
