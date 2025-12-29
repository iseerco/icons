import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NailArt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 0h-4c-2.206 0-4 1.794-4 4v11c0 2.757 2.243 5 5 5h2c2.757 0 5-2.243 5-5v-11c0-2.206-1.794-4-4-4zm-3.333 4.667.833-1.667.833 1.667 1.667.833-1.667.833-.833 1.667-.833-1.667-1.667-.833zm2.833 9.833-1 2-1-2-2-1 2-1 1-2 1 2 2 1zm10.5.697v8.803h-24v-8.803c0-3.397 1.476-6.535 4-8.703v8.506c0 3.86 3.14 7 7 7h2c3.86 0 7-3.14 7-7v-8.506c2.524 2.168 4 5.306 4 8.703z"/></svg>
);
