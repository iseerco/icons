import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Billiard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1 -12 12zm0-22a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1 -8 8zm0-14a6 6 0 1 0 6 6 6.006 6.006 0 0 0 -6-6zm-.143 9.515 3-5a1 1 0 0 0 -.857-1.515h-4a1 1 0 0 0 0 2h2.234l-2.091 3.485a1 1 0 1 0 1.714 1.03z"/></svg>
);
