import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCream = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 11.351v-5.351h-3.045a8.079 8.079 0 0 0 -2.955-6 2.938 2.938 0 0 1 -3 3h-3c-3.066 0-4.249 1.691-4.707 3h-3.293v5.351a3.5 3.5 0 0 0 -2 3.149v9.5h24v-9.5a3.5 3.5 0 0 0 -2-3.149zm-3-2.351v2h-14v-2zm2 12h-18v-6.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5z"/></svg>
);
