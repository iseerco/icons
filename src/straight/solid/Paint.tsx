import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Paint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.024 23.976.076-1.05c.076-1.1.545-6.688 2.307-8.451a5.036 5.036 0 0 1 7.118 7.125c-1.762 1.762-7.349 2.23-8.452 2.306zm23.076-23.108a3.137 3.137 0 0 0 -4.333 0l-10.515 10.519a6.967 6.967 0 0 1 4.342 4.324l10.506-10.511a3.067 3.067 0 0 0 0-4.332z"/></svg>
);
