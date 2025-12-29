import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NetworkCloud = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 20h-9.184a3 3 0 0 0 -1.816-1.816v-4.184h3a5 5 0 0 0 .787-9.938 5.488 5.488 0 0 0 -10.787 1.438 5.147 5.147 0 0 0 .038.617 4 4 0 0 0 .962 7.883h4v4.184a3 3 0 0 0 -1.816 1.816h-9.184v2h9.184a2.982 2.982 0 0 0 5.632 0h9.184z"/></svg>
);
