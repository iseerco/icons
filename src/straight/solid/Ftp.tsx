import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ftp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 5h-18v-2a3 3 0 0 1 3-3h3.4l2.91 2h5.69a3 3 0 0 1 3 3zm3 15h-9.184a3 3 0 0 0 -1.816-1.816v-3.184h8v-8h-18v8h8v3.184a3 3 0 0 0 -1.816 1.816h-9.184v2h9.184a2.982 2.982 0 0 0 5.632 0h9.184z"/></svg>
);
