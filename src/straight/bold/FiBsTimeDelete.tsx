import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTimeDelete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.621 19.5 2.44 2.439-2.122 2.122-2.439-2.44-2.439 2.44-2.122-2.122 2.44-2.439-2.44-2.439 2.122-2.122 2.439 2.44 2.439-2.44 2.122 2.122zm-18.621-7.5a9 9 0 1 1 17.941 1h3.008c.028-.331.051-.662.051-1a12 12 0 1 0 -12 12c.338 0 .669-.023 1-.051v-3.008a8.972 8.972 0 0 1 -10-8.941zm7-6v5.379l-2.561 2.56 2.122 2.122 3.439-3.44v-6.621z"/></svg>
);
