import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10 24h-10v-2h10zm-2-6h-8v2h8zm-2-4h-6v2h6zm17.991-2.474a12.013 12.013 0 0 1 -11.991 12.474v-2a2 2 0 0 0 -2-2v-2a2 2 0 0 0 -2-2v-2a2 2 0 0 0 -2-2h-6a12.014 12.014 0 0 1 12.475-11.991 12.114 12.114 0 0 1 11.516 11.517zm-12.991-5.733v5.414l3.293 3.293 1.414-1.414-2.707-2.707v-4.586z"/></svg>
);
