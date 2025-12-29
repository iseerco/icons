import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFullScreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 19v2h4.5v3h-12v-3h4.5v-2h-10.5v-16c0-1.654 1.346-3 3-3h1v3h-1v13h18v-13h-1v-3h1c1.654 0 3 1.346 3 3v16zm-6.731-7h4.231l-1.439-1.439 2.439-2.439 2.439 2.439-1.439 1.439h4.231c.425 0 .769-.344.769-.769v-4.231l-1.439 1.439-2.439-2.439 2.439-2.439 1.439 1.439v-4.231c0-.425-.344-.769-.769-.769h-4.231l1.439 1.439-2.439 2.439-2.439-2.439 1.439-1.439h-4.231c-.425 0-.769.344-.769.769v4.231l1.439-1.439 2.439 2.439-2.439 2.439-1.439-1.439v4.231c0 .425.344.769.769.769z"/></svg>
);
