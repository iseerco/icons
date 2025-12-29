import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGlobeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 15a7.5 7.5 0 1 0 -7.5-7.5 7.508 7.508 0 0 0 7.5 7.5zm0-12a4.5 4.5 0 1 1 -4.5 4.5 4.505 4.505 0 0 1 4.5-4.5zm1 16.939v1.061h3.5v3h-10v-3h3.5v-1.175a12.488 12.488 0 0 1 -8.083-19.713l2.417 1.776a9.5 9.5 0 1 0 15.51 10.972l2.475 1.7a12.489 12.489 0 0 1 -9.319 5.379z"/></svg>
);
