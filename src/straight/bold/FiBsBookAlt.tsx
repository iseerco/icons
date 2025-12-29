import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.775 1.747a3.407 3.407 0 0 0 -2.795-.737l-5.9 1.073a4.348 4.348 0 0 0 -2.083 1 4.343 4.343 0 0 0 -2.083-1l-5.894-1.073a3.41 3.41 0 0 0 -4.02 3.354v16.524l12 2.182 12-2.182v-16.524a3.4 3.4 0 0 0 -1.225-2.617zm-12.275 18-7.5-1.363v-14.02a.41.41 0 0 1 .482-.4l5.9 1.073a1.363 1.363 0 0 1 1.118 1.338zm10.5-1.363-7.5 1.364v-13.373a1.363 1.363 0 0 1 1.12-1.341l5.9-1.072a.408.408 0 0 1 .482.4z"/></svg>
);
