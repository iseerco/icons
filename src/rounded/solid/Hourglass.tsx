import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hourglass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 24h-9.995a4.02 4.02 0 0 1 -3.045-1.4 3.945 3.945 0 0 1 -.916-3.158 12.517 12.517 0 0 1 4.401-7.442 12.517 12.517 0 0 1 -4.4-7.444 3.945 3.945 0 0 1 .915-3.156 4.02 4.02 0 0 1 3.045-1.4h9.995a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155 12.556 12.556 0 0 1 -4.411 7.445 12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1 -.918 3.156 4.017 4.017 0 0 1 -3.039 1.396z"/></svg>
);
