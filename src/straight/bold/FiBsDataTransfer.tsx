import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDataTransfer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5 0h-6a3.5 3.5 0 0 0 -3.5 3.5v6.5h5v1h-2v3h7v-3h-2v-1h5v-6.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 7h-7v-3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5zm7.5-1h-2.5v-3h2.5a3.5 3.5 0 0 1 3.5 3.5v2.5h-3v-2.5a.5.5 0 0 0 -.5-.5zm-9 13h4.5v3h-4.5a3.5 3.5 0 0 1 -3.5-3.5v-2.5h3v2.5a.5.5 0 0 0 .5.5zm12.5-8h-3a3 3 0 0 0 -3 3v10h9v-10a3 3 0 0 0 -3-3zm-1.5 11a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1 -1.5 1.5z"/></svg>
);
