import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGridAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 0h-17a3.5 3.5 0 0 0 -3.5 3.5v20.5h24v-20.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 3.5v3.5h-4v-4h3.5a.507.507 0 0 1 .5.5zm-11 10.5v-4h4v4zm4 3v4h-4v-4zm-7-3h-4v-4h4zm3-7v-4h4v4zm7 3h4v4h-4zm-13.5-7h3.5v4h-4v-3.5a.5.5 0 0 1 .5-.5zm-.5 14h4v4h-4zm14 4v-4h4v4z"/></svg>
);
