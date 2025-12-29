import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBitcoinCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 10h1v-1h.75c1.24 0 2.25-1.01 2.25-2.25 0-.83-.452-1.558-1.123-1.947.386-.404.623-.951.623-1.553 0-1.24-1.01-2.25-2.25-2.25h-.25v-1h-1v1h-2v8h2zm-1-8h2.25c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25h-2.25zm0 3.5h2.75c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25h-2.75zm-16 10.5c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zm3 0c0 .552-.449 1-1 1s-1-.448-1-1 .449-1 1-1 1 .448 1 1zm17-5h1v10h-24v-15.5c0-1.379 1.122-2.5 2.5-2.5h13.5v1h-13.5c-.827 0-1.5.673-1.5 1.5v2.5h15v1h-15v11h22z"/></svg>
);
