import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4 10h3v3h-3zm5 3h3v-3h-3zm-5 5h3v-3h-3zm5 0h3v-3h-3zm-5-10h3v-3h-3zm5 0h3v-3h-3zm15 .5v15.5h-24v-20.5a3.5 3.5 0 0 1 3.5-3.5h9a3.5 3.5 0 0 1 3.5 3.5v1.5h4.5a3.5 3.5 0 0 1 3.5 3.5zm-11-5a.5.5 0 0 0 -.5-.5h-9a.5.5 0 0 0 -.5.5v17.5h10zm8 5a.5.5 0 0 0 -.5-.5h-4.5v13h5zm-4 4.5h3v-3h-3zm0 5h3v-3h-3z"/></svg>
);
