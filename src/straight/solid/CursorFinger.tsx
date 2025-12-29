import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorFinger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 2.58a2.564 2.564 0 0 0 -2.087-2.546 2.5 2.5 0 0 0 -2.913 2.466v14.5h-2v-5.389l-3.121 3.025a3 3 0 0 0 -.828 2.682 3.129 3.129 0 0 0 .9 1.637l5.049 5.045h14v-13.806l-9-2.014z"/></svg>
);
