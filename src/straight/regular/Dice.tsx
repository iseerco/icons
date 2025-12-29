import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 24h-24v-21a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm-22-2h20v-19a1 1 0 0 0 -1-1h-18a1 1 0 0 0 -1 1zm9-10a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-5-5a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-10 10a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z"/></svg>
);
