import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.474 11a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1 -5.5 5.5zm8.526-1a7 7 0 1 0 7 7 7.008 7.008 0 0 0 -7-7zm2 10.414-3-3v-4.414h2v3.586l2.414 2.414zm-11-3.414a8.938 8.938 0 0 1 .947-4h-3.947a5.006 5.006 0 0 0 -5 5v6h11.349a8.98 8.98 0 0 1 -3.349-7z"/></svg>
);
