import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFilm = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 0v24h24v-24zm21 3v4h-2v-4zm-16 11h-2v-4h2zm3-.5h8v7.5h-8zm11-3.5h2v4h-2zm-3-7v7.5h-8v-7.5zm-11 0v4h-2v-4zm-2 14h2v4h-2zm16 4v-4h2v4z"/></svg>
);
