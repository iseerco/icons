import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBasketball = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm-1.332 15.453 1.332-1.332 5.207 5.207a8.946 8.946 0 0 1 -4.169 1.607 11.9 11.9 0 0 0 -2.37-5.482zm2.664-6.906-1.332 1.332-5.206-5.207a8.939 8.939 0 0 1 4.167-1.607 11.916 11.916 0 0 0 2.371 5.482zm-3.453 3.453-1.332 1.332a11.916 11.916 0 0 0 -5.482-2.371 8.934 8.934 0 0 1 1.607-4.167zm4.242 0 1.332-1.332a11.916 11.916 0 0 0 5.482 2.371 8.942 8.942 0 0 1 -1.607 4.168zm6.636-2.042a8.985 8.985 0 0 1 -6.715-6.716 9.021 9.021 0 0 1 6.715 6.716zm-17.514 4.084a8.986 8.986 0 0 1 6.715 6.715 9.018 9.018 0 0 1 -6.715-6.715z"/></svg>
);
