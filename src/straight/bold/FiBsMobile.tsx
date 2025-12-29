import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 0h-13a3.5 3.5 0 0 0 -3.5 3.5v20.5h20v-20.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 21h-5.5v-2h-3v2h-5.5v-17.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5zm-11-6h8v3h-8zm6.553-9.271a2.748 2.748 0 0 0 -5.08-.06l-.673 1.491a8.957 8.957 0 0 0 -.8 3.706v2.134h3v-1h2v1h3v-2.134a8.942 8.942 0 0 0 -.8-3.706z"/></svg>
);
