import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Browser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 9v9a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-9zm14 10h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm4-4h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm6-8v-1a5.006 5.006 0 0 0 -5-5h-14a5.006 5.006 0 0 0 -5 5v1zm-14-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-3 0a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-3 0a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"/></svg>
);
