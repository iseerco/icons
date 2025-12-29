import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMagnifyingGlassPlay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.988 21.873-5.947-5.947c1.225-1.66 1.959-3.703 1.959-5.92 0-5.514-4.486-10-10-10s-10 4.486-10 10 4.486 10 10 10c2.217 0 4.26-.734 5.92-1.959l5.947 5.947zm-13.988-4.867c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 3.141 7 7-3.14 7-7 7zm-2.5-10.798 6.5 3.792-6.5 3.792z"/></svg>
);
