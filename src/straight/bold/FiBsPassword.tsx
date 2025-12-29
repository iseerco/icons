import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPassword = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 15h6v3h-6zm4.439-9.061-1.439 1.44-1.439-1.44-2.122 2.122 1.44 1.439-1.44 1.439 2.122 2.122 1.439-1.44 1.439 1.44 2.122-2.122-1.44-1.439 1.44-1.439zm3.561 12.061h6v-3h-6zm6.561-9.939-2.122-2.122-1.439 1.44-1.439-1.44-2.122 2.122 1.44 1.439-1.44 1.439 2.122 2.122 1.439-1.44 1.439 1.44 2.122-2.122-1.44-1.439zm-22.561 9.939h6v-3h-6zm4.439-12.061-1.439 1.44-1.439-1.44-2.122 2.122 1.44 1.439-1.44 1.439 2.122 2.122 1.439-1.44 1.439 1.44 2.122-2.122-1.44-1.439 1.44-1.439z"/></svg>
);
