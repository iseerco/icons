import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorFinger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.981 9.376-4.981-1.196v-5.6a2.564 2.564 0 0 0 -2.087-2.546 2.5 2.5 0 0 0 -2.913 2.466v14.5a1 1 0 0 1 -2 0v-7.34l-2.789 3.64a5.021 5.021 0 0 0 .249 6.794l2.4 2.425a5.036 5.036 0 0 0 3.554 1.481h7.586a5 5 0 0 0 5-5v-4.721a5 5 0 0 0 -4.019-4.903z"/></svg>
);
