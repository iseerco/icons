import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lipstick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 7v-3.381a2 2 0 0 1 1.106-1.789l3.447-1.723a1 1 0 0 1 1.447.893v6zm10 7h-14v10h14zm-2-5h-10v3h10z"/></svg>
);
