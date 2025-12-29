import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Browser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 9v14h24v-14zm15 10h-10v-2h10zm4-4h-14v-2h14zm2-14h-18a3 3 0 0 0 -3 3v3h24v-3a3 3 0 0 0 -3-3zm-17 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm3 0a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm3 0a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></svg>
);
