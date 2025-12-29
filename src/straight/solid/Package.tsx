import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Package = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 8v16h-2v-6h-20v6h-2v-10.519a5.5 5.5 0 0 1 11 0v2.519h3v-8h4v3h2v-3zm-18.5-1a3.5 3.5 0 1 0 -3.5-3.5 3.5 3.5 0 0 0 3.5 3.5z"/></svg>
);
