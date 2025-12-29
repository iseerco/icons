import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrombone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 2c0 3.477-2.733 6-6.5 6h-1.5v-2h-3v2h-2v-2h-3v2h-1c-2.209 0-4 1.791-4 4s1.791 4 4 4h1v2h-2l-3-1v5l3-1h12c2.209 0 4-1.791 4-4s-1.791-4-4-4h-2v-2h1.5c3.767 0 6.5 2.523 6.5 6h3v-15zm-16 11h-1c-.552 0-1-.448-1-1s.448-1 1-1h1zm5 5h-2v-2h2zm0-5h-2v-2h2zm5 3c.552 0 1 .448 1 1s-.448 1-1 1h-2v-2z"/></svg>
);
