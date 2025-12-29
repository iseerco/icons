import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RemoveUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 6a6 6 0 1 1 6 6 6 6 0 0 1 -6-6zm10.043 8h-8.086a4.963 4.963 0 0 0 -4.957 4.957v5.043h18v-5.043a4.963 4.963 0 0 0 -4.957-4.957zm2.957-4v2h8v-2z"/></svg>
);
