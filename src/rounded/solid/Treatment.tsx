import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Treatment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 2h-.171a3.006 3.006 0 0 0 -2.829-2h-2a3.006 3.006 0 0 0 -2.829 2h-.171a5.006 5.006 0 0 0 -5 5v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-12a5.006 5.006 0 0 0 -5-5zm-7 5h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 0-2zm3 13h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm4-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"/></svg>
);
