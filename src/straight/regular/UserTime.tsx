import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.474 11a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1 -5.5 5.5zm0-9a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0 -3.5-3.5zm8.526 22a7 7 0 1 1 7-7 7.008 7.008 0 0 1 -7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0 -5-5zm2.707 6.293-1.707-1.707v-2.586h-2v3.414l2.293 2.293zm-10.76-5.293h-3.947a5.006 5.006 0 0 0 -5 5v6h2v-6a3 3 0 0 1 3-3h3.231a8.852 8.852 0 0 1 .716-2z"/></svg>
);
