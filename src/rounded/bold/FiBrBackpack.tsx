import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBackpack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 14.141v-2.141a8 8 0 0 0 -4-6.916v-1.084a4 4 0 0 0 -8 0v1.084a8 8 0 0 0 -4 6.916v2.141a3.991 3.991 0 0 0 -3 3.859v2a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-2a3.991 3.991 0 0 0 -3-3.859zm-3 6.859h-10v-.258a5.93 5.93 0 0 1 10 0zm0-4.463a8.9 8.9 0 0 0 -10 0v-4.537a5 5 0 0 1 10 0zm-2-5.037a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
);
