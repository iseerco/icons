import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LockAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm0-15a2.993 2.993 0 0 0 -1 5.816v4.184h2v-4.184a2.993 2.993 0 0 0 -1-5.816zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></svg>
);
