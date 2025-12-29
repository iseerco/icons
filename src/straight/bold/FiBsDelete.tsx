import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDelete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 2h-13.241l-7.648 10 7.648 10h13.241a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm0 17h-11.759l-5.352-7 5.352-7h11.759zm-11.061-5.061 1.94-1.939-1.94-1.939 2.122-2.122 1.939 1.94 1.939-1.94 2.122 2.122-1.94 1.939 1.94 1.939-2.122 2.122-1.939-1.94-1.939 1.94z"/></svg>
);
