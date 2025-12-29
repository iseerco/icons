import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDeleteDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.061 12.061-1.94 1.939 1.94 1.939-2.122 2.122-1.939-1.94-1.939 1.94-2.122-2.122 1.94-1.939-1.94-1.939 2.122-2.122 1.939 1.94 1.939-1.94zm5.939-6.182v18.121h-20v-21a3 3 0 0 1 3-3h11.121zm-3 15.121v-13h-5v-5h-9v18z"/></svg>
);
