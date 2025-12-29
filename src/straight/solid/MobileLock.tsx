import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MobileLock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 6v-1c0-2.206-1.794-4-4-4s-4 1.794-4 4v1h-2v7c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-7zm-6-1c0-1.103.897-2 2-2s2 .897 2 2v1h-4zm3 7h-2v-2h2zm-17 6v3c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-3zm10 4h-4v-2h4zm-.974-6h-9.026v-16h12.719c-1.365.899-2.354 2.326-2.636 4h-2.083v9c0 1.13.391 2.162 1.026 3z"/></svg>
);
