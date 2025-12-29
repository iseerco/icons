import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 3a3 3 0 0 0 -3-3h-12v24h2v-11h8v1a3 3 0 0 0 3 3h11v-13h-9zm-13-1h10a1 1 0 0 1 1 1v8h-11zm20 4v9h-9a1 1 0 0 1 -1-1v-1h3v-7z"/></svg>
);
