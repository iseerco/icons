import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorFinger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 8.18v-5.073a3.082 3.082 0 0 0 -2.5-3.066 3 3 0 0 0 -3.5 2.959v7.581l-4.121 4.055a3 3 0 0 0 0 4.242l5.121 5.122h15v-13.82zm8 13.82h-12.172l-4.535-4.536a1 1 0 0 1 -.006-1.408l2.713-2.669v3.613h2v-14a1 1 0 0 1 1.175-.986 1.085 1.085 0 0 1 .825 1.093v6.713l10 2z"/></svg>
);
