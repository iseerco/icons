import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const JuneCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.4 16h1.6v8h-1.6l-1.8-4.054v4.054h-1.6v-8h1.6v.009l1.8 4.054zm-12 5.7c0 .386-.314.7-.7.7s-.7-.314-.7-.7v-.7h-1.6v.7c0 1.269 1.031 2.3 2.3 2.3s2.3-1.031 2.3-2.3v-5.7h-1.6zm5.8 0c0 .386-.314.7-.7.7s-.7-.314-.7-.7v-5.7h-1.6v5.7c0 1.269 1.031 2.3 2.3 2.3s2.3-1.031 2.3-2.3v-5.7h-1.6zm7.8-16.7v9h-2v-4h-20v12h3.423c.053.732.283 1.414.657 2h-6.08v-19c0-1.654 1.346-3 3-3h3v-2h2v2h8v-2h2v2h3c1.654 0 3 1.346 3 3zm-2 3v-3c0-.551-.449-1-1-1h-18c-.551 0-1 .449-1 1v3z"/></svg>
);
