import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsJuneCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 5v9h-3v-4h-18v11h2.4v.7c0 .847.255 1.633.68 2.3h-6.08v-19c0-1.654 1.346-3 3-3h3v-2h3v2h6v-2h3v2h3c1.654 0 3 1.346 3 3zm-1.6 15.063-1.8-4.054v-.009h-1.6v8h1.6v-4.054l1.8 4.054h1.6v-8h-1.6zm-12 1.637c0 .386-.314.7-.7.7s-.7-.314-.7-.7v-.7h-1.6v.7c0 1.269 1.031 2.3 2.3 2.3s2.3-1.031 2.3-2.3v-5.7h-1.6zm5.8 0c0 .386-.314.7-.7.7s-.7-.314-.7-.7v-5.7h-1.6v5.7c0 1.269 1.031 2.3 2.3 2.3s2.3-1.031 2.3-2.3v-5.7h-1.6z"/></svg>
);
