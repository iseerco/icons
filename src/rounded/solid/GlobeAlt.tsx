import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlobeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 8a8 8 0 1 1 8 8 8.009 8.009 0 0 1 -8-8zm17.646 5.383a1 1 0 0 0 -1.39.26 10 10 0 1 1 -15.971-12.006 1 1 0 0 0 -1.542-1.274 11.994 11.994 0 0 0 8.257 19.586v2.051h-4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2.061a11.992 11.992 0 0 0 8.907-5.166 1 1 0 0 0 -.261-1.39z"/></svg>
);
