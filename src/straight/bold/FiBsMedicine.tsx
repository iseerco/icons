import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMedicine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5 7h-1.5v-2h2v-5h-12v5h2v2h-1.5a3.5 3.5 0 0 0 -3.5 3.5v13.5h18v-13.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 14h-12v-10.5a.5.5 0 0 1 .5-.5h4.5v-5h2v5h4.5a.5.5 0 0 1 .5.5zm-4.5-7h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3z"/></svg>
);
