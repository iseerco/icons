import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTimeQuarterPast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.5 13.5h-2.19a1.991 1.991 0 0 1 -2.81-2.81v-3.69a1.5 1.5 0 0 1 3 0v3.5h2a1.5 1.5 0 0 1 0 3zm-3.5-13.5a1.5 1.5 0 0 0 0 3 9.01 9.01 0 0 1 9 9 1.5 1.5 0 0 0 3 0 12.013 12.013 0 0 0 -12-12zm-9 12.5a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5zm3.74-10.606a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm-3.827 3.856a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm3.827 14.356a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm-3.827-3.856a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm9.087 4.75a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm9.106-5.24a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm-3.856 3.827a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5z"/></svg>
);
