import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 4v-.5a3.5 3.5 0 0 0 -3.5-3.5h-12.5v24h3v-10h7v.5a3.5 3.5 0 0 0 3.5 3.5h10.5v-14zm-13-1h9.5a.5.5 0 0 1 .5.5v7.5h-10zm18 12h-7.5a.5.5 0 0 1 -.5-.5v-.5h3v-7h5z"/></svg>
);
