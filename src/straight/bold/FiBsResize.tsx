import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsResize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 3.5a3.5 3.5 0 0 0 -3.5-3.5h-12a3.5 3.5 0 0 0 -3.5 3.5v7.5h-1.5a3.5 3.5 0 0 0 -3.5 3.5v9.5h13v-5h11zm-14 17.5h-7v-6.5a.5.5 0 0 1 .5-.5h1.5v5h5zm11-5h-8v-1.5a3.463 3.463 0 0 0 -.214-1.164l3.214-3.215v1.879h3v-7h-7v3h1.879l-3.215 3.214a3.463 3.463 0 0 0 -1.164-.214h-1.5v-7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5z"/></svg>
);
