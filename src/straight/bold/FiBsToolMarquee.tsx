import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsToolMarquee = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 24h-6v-3h3v-3h3zm0-20.5a3.5 3.5 0 0 0 -3.5-3.5h-2.5v3h2.5a.507.507 0 0 1 .5.5v2.5h3zm0 5.5h-3v6h3zm-18 12h-3v-3h-3v6h6zm-3-17.5a.5.5 0 0 1 .5-.5h2.5v-3h-2.5a3.5 3.5 0 0 0 -3.5 3.5v2.5h3zm0 5.5h-3v6h3zm12-9h-6v3h6zm.068 21h-6.068v3h6.068z"/></svg>
);
