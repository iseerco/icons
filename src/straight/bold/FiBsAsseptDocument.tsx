import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAsseptDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.939 11.268 2.122 2.121-3.586 3.586a3.5 3.5 0 0 1 -4.95 0l-1.586-1.585 2.122-2.122 1.585 1.585a.5.5 0 0 0 .707 0zm7.061-5.389v18.121h-20v-21a3 3 0 0 1 3-3h11.121zm-3 15.121v-13h-5v-5h-9v18z"/></svg>
);
