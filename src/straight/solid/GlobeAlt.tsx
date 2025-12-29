import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlobeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 8a8 8 0 1 1 8 8 8.009 8.009 0 0 1 -8-8zm17.907 6.773-1.651-1.13a10 10 0 1 1 -15.671-12.354l-1.485-1.342a11.993 11.993 0 0 0 7.9 20v2.053h-4v2h10v-2h-4v-2.061a11.992 11.992 0 0 0 8.907-5.166z"/></svg>
);
