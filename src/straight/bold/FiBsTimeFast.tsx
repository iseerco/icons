import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTimeFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10 24h-10v-3h10zm-2-8h-8v3h8zm-2-5h-6v3h6zm5-5v6.621l3.439 3.44 2.122-2.122-2.561-2.56v-5.379zm1-6a12.006 12.006 0 0 0 -11.6 9h3.13a8.995 8.995 0 1 1 8.47 12v3a12 12 0 0 0 0-24z"/></svg>
);
