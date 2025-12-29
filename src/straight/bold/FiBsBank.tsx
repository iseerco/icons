import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 21h24v3h-24zm24-12.9v1.9h-3v6h2v3h-22v-3h2v-6h-3v-1.9a3.408 3.408 0 0 1 1.777-3l8.59-4.684a3.4 3.4 0 0 1 3.266 0l8.591 4.684a3.409 3.409 0 0 1 1.776 3zm-19.438-1.1h14.875l-7.237-3.95a.4.4 0 0 0 -.39 0zm6.438 3v6h2v-6zm-5 6h2v-6h-2zm12-6h-2v6h2z"/></svg>
);
