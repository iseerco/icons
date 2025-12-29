import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLocationAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.071 2.936a10 10 0 1 0 -14.131 14.153l4 3.911h-3.94v3h14v-3h-3.939l4.01-3.923a10.008 10.008 0 0 0 0-14.141zm-2.109 12.008-4.962 4.856-4.95-4.844a7 7 0 1 1 9.912-.012zm-9.962-7.86v6.229l5 2.5 5-2.5v-6.229l-5-2.5zm5 5.375-2-1v-2.7l2 1 2-1v2.7z"/></svg>
);
