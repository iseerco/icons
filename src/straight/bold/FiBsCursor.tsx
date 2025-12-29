import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCursor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.811 13.29-14.796-12.777a2.5 2.5 0 0 0 -4.015 1.987v19.307l6.306-5.564 3.886 7.757 4.35-2.175-3.767-7.643zm-15.811-9.69 8.647 7.469-4.933.545-3.714 3.546z"/></svg>
);
