import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const JuneCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 16v8h-1.6l-1.8-4.054v4.054h-1.6v-8h1.6v.009l1.8 4.054v-4.063zm-13.6 0v5.7c0 .386-.314.7-.7.7s-.7-.314-.7-.7v-.7h-1.6v.7c0 1.269 1.031 2.3 2.3 2.3s2.3-1.031 2.3-2.3v-5.7zm5.8 0v5.7c0 .386-.314.7-.7.7s-.7-.314-.7-.7v-5.7h-1.6v5.7c0 1.269 1.031 2.3 2.3 2.3s2.3-1.031 2.3-2.3v-5.7zm7.8-11v3h-24v-3c0-1.657 1.343-3 3-3h3v-2h2v2h8v-2h2v2h3c1.657 0 3 1.343 3 3zm-24 5h24v4h-15.5v5h-3v3c.053.732.283 1.414.657 2h-6.157z"/></svg>
);
