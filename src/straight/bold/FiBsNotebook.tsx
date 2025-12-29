import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNotebook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 2v-2h-3v2h-2.5v-2h-3v2h-2.5v-2h-3v2h-3v18.5a3.5 3.5 0 0 0 3.5 3.5h13a3.5 3.5 0 0 0 3.5-3.5v-18.5zm0 18.5a.5.5 0 0 1 -.5.5h-13a.5.5 0 0 1 -.5-.5v-15.5h14zm-2-10.5h-10v-3h10zm-4 5h-6v-3h6z"/></svg>
);
