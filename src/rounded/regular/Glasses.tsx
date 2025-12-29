import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Glasses = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 0a4 4 0 0 0 -4 4 1 1 0 0 0 2 0 2 2 0 0 1 4 0v11.026a4.948 4.948 0 0 0 -3-1.026 5 5 0 0 0 -4.145 2.207 3.98 3.98 0 0 0 -5.71 0 5 5 0 0 0 -4.145-2.207 4.948 4.948 0 0 0 -3 1.026v-11.026a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0 -8 0v15a5 5 0 0 0 10 0 2 2 0 0 1 4 0 5 5 0 0 0 10 0v-15a4 4 0 0 0 -4-4zm-15 22a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z"/></svg>
);
