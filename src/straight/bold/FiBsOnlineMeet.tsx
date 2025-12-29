import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsOnlineMeet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zm10-8v16h-10.5v2h4.5v3h-12v-3h4.5v-2h-10.5v-16c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-7.5 1.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-6 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-6 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm16.5 4.5c0-1.105-.895-2-2-2h-2c-1.105 0-2 .895-2 2 0-1.105-.895-2-2-2h-2c-1.105 0-2 .895-2 2 0-1.105-.895-2-2-2h-2c-1.105 0-2 .895-2 2v7h5.5c0-1.105.895-2 2-2h3c1.105 0 2 .895 2 2h5.5z"/></svg>
);
