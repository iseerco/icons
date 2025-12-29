import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Diamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.726 9-3.726 15-3.726-15zm-4.753-9-2.545 7h7.144l-2.545-7zm6.727 7h6.141a2.974 2.974 0 0 0 -.4-.8l-3.531-4.943a3 3 0 0 0 -2.441-1.257h-2.314zm.085 2-2.765 11.3 8.339-10.5a2.962 2.962 0 0 0 .441-.8zm-11.57 0h-6.015a2.994 2.994 0 0 0 .445.8l8.335 10.5zm.085-2 2.545-7h-2.314a3 3 0 0 0 -2.441 1.257l-3.531 4.943a2.946 2.946 0 0 0 -.4.8z"/></svg>
);
