import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stethoscope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 9a3 3 0 1 0 -4 2.816v4.184a6 6 0 0 1 -12 0v-.08a7.006 7.006 0 0 0 6-6.92v-6a3 3 0 0 0 -3-3h-3v2h3a1 1 0 0 1 1 1v6a5 5 0 0 1 -10 0v-6a1 1 0 0 1 1-1h3v-2h-3a3 3 0 0 0 -3 3v6a7.006 7.006 0 0 0 6 6.92v.08a8 8 0 0 0 16 0v-4.184a3 3 0 0 0 2-2.816z"/></svg>
);
