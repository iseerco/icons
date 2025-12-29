import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlobeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 16a8 8 0 1 0 -8-8 8.009 8.009 0 0 0 8 8zm0-14a6 6 0 1 1 -6 6 6.006 6.006 0 0 1 6-6zm9.907 12.773a11.992 11.992 0 0 1 -8.907 5.166v2.061h4a1 1 0 0 1 0 2h-10a1 1 0 0 1 0-2h4v-2.051a11.994 11.994 0 0 1 -8.257-19.586 1 1 0 0 1 1.542 1.274 10 10 0 1 0 15.971 12.006 1 1 0 0 1 1.651 1.13z"/></svg>
);
