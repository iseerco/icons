import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTransform = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 24h-7v-3h4v-4h3zm0-20.5a3.5 3.5 0 0 0 -3.5-3.5h-3.5v3h3.5a.507.507 0 0 1 .5.5v3.5h3zm-17 17.5h-4v-4h-3v7h7zm-4-17.5a.5.5 0 0 1 .5-.5h3.5v-3h-3.5a3.5 3.5 0 0 0 -3.5 3.5v3.5h3zm13 8.5a4 4 0 1 0 -4 4 4.005 4.005 0 0 0 4-4z"/></svg>
);
