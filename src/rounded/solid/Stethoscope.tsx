import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stethoscope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 9a3 3 0 1 0 -4 2.816v4.184a6 6 0 0 1 -12 0v-.08a7.006 7.006 0 0 0 6-6.92v-4a5.006 5.006 0 0 0 -5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3v4a5 5 0 0 1 -10 0v-4a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0 -5 5v4a7.006 7.006 0 0 0 6 6.92v.08a8 8 0 0 0 16 0v-4.184a3 3 0 0 0 2-2.816z"/></svg>
);
