import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Presentation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 12v-9a3 3 0 0 0 -3-3h-14a3 3 0 0 0 -3 3v9z"/><path d="m0 14v2h11v4h-2a3 3 0 0 0 -3 3v1h2v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h2v-1a3 3 0 0 0 -3-3h-2v-4h11v-2z"/></svg>
);
