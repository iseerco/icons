import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAccessDenied = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 12c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm3.536 8.121-1.414 1.414-2.121-2.121-2.121 2.121-1.414-1.414 2.121-2.121-2.121-2.121 1.414-1.414 2.121 2.121 2.121-2.121 1.414 1.414-2.121 2.121zm-13.536-7.121h3.76c-.698.869-1.212 1.888-1.498 3h-2.262zm0 7h-5v-10h17v-3h-3c0-3.86-3.141-7-7-7s-7 3.14-7 7h-3v13c0 1.654 1.346 3 3 3h8.76c-.698-.869-1.212-1.888-1.498-3zm2-17c2.206 0 4 1.794 4 4h-8c0-2.206 1.794-4 4-4z"/></svg>
);
