import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 6h-5v3l-3.707-3.793c-.39-.39-.39-1.024 0-1.414l3.707-3.793v3h5zm-13.5 10h-6c-2.481 0-4.5 2.019-4.5 4.5v3.5h3v-3.5c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v3.5h3v-3.5c0-2.481-2.019-4.5-4.5-4.5zm-8.5-7.5c0-3.033 2.468-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.468 5.5-5.5 5.5-5.5-2.467-5.5-5.5zm3 0c0 1.378 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.121-2.5-2.5-2.5-2.5 1.122-2.5 2.5z"/></svg>
);
