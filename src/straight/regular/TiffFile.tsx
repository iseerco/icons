import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TiffFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 12h1.6v8h-1.6zm12 1.6v-1.6h-4v8h1.6v-3h2.4v-1.6h-2.4v-1.801h2.4zm-5 0v-1.6h-4v8h1.6v-3h2.4v-1.6h-2.4v-1.801h2.4zm-9.75 6.4v-6.4h1.75v-1.6h-5v1.6h1.65v6.4zm-5.25 2h18v2h-20v-21c0-1.654 1.346-3 3-3h9.414l7.586 7.586v2.414h-2v-1h-7v-7h-8c-.551 0-1 .448-1 1zm11-15h3.586l-3.586-3.586z"/></svg>
);
