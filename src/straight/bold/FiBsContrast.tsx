import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsContrast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.5 21h3v3h-3zm3-21h-3v3h3zm7.5 10.5v3h3v-3zm-18 0h-3v3h3zm-.546 8.925 2.121 2.121 2.122-2.121-2.121-2.121zm19.092-14.85-2.121-2.121-2.121 2.122 2.121 2.121zm-4.242 14.85 2.121 2.121 2.121-2.121-2.121-2.121zm-10.607-14.849-2.122-2.122-2.121 2.121 2.122 2.122zm12.303 7.424c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.14-7 7-7 7 3.14 7 7zm-3 0c0-2.206-1.794-4-4-4v8c2.206 0 4-1.794 4-4z"/></svg>
);
