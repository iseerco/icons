import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSweep = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 10h-6v-10h-1v10h-6c-1.378 0-2.5 1.122-2.5 2.5v8.5c0 1.383-.617 2-2 2v1h16.5c1.93 0 3.5-1.57 3.5-3.5v-8c0-1.378-1.121-2.5-2.5-2.5zm-13 1h13c.827 0 1.5.673 1.5 1.5v1.5h-16v-1.5c0-.827.673-1.5 1.5-1.5zm12 12h-14.077c.379-.495.577-1.167.577-2v-6h3v5h1v-5h2v5h1v-5h2v5h1v-5h2v5h1v-5h3v5.5c0 1.378-1.121 2.5-2.5 2.5zm4.12-18.623-1.123-2.246-1.123 2.246-2.245 1.123 2.245 1.123 1.123 2.246 1.123-2.246 2.245-1.123zm-.746 1.5-.377.754-.377-.754-.755-.377.755-.377.377-.754.377.754.755.377zm-16.377.991 1.123-2.246 2.246-1.123-2.246-1.123-1.123-2.245-1.123 2.246-2.246 1.123 2.246 1.123 1.123 2.246zm-.377-3.746.377-.754.377.754.754.377-.754.377-.377.754-.377-.754-.754-.377z"/></svg>
);
