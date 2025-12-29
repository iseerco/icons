import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Money = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 4h-14a5.006 5.006 0 0 0 -5 5v6a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-6a5.006 5.006 0 0 0 -5-5zm-15 13a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-8a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm8 7a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm8 1a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-8a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm-6 3a2 2 0 1 1 -2-2 2 2 0 0 1 2 2z"/></svg>
);
