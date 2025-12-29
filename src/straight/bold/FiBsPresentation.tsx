import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPresentation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 16v-3h-2v-9.5a3.5 3.5 0 0 0 -3.5-3.5h-13a3.5 3.5 0 0 0 -3.5 3.5v9.5h-2v3h10.5v3h-1a3.5 3.5 0 0 0 -3.5 3.5v1.5h3v-1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.5h3v-1.5a3.5 3.5 0 0 0 -3.5-3.5h-1v-3zm-19-12.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9.5h-14z"/></svg>
);
