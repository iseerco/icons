import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LockAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 10a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm11 2a12 12 0 1 1 -12-12 12.013 12.013 0 0 1 12 12zm-9-2a3 3 0 1 0 -4 2.816v3.184a1 1 0 0 0 2 0v-3.184a3 3 0 0 0 2-2.816z"/></svg>
);
