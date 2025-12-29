import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessPiece = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.026 5c0-1.077 1.267-3.117 2.154-4.533a1 1 0 0 1 1.691 0c.887 1.416 2.155 3.456 2.155 4.533a3 3 0 0 1 -6 0zm10 17.026v-2h-14v2h-2v2h18v-2zm-3.987-12h1.987v-2h-10v2h1.987c-.064 3.773-1.005 6.013-3.363 8h12.75c-2.357-1.987-3.3-4.226-3.362-8z"/></svg>
);
