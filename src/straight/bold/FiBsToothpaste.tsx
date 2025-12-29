import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsToothpaste = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 4.023v4.243l-2.487 2.487-4.429-.661-2.535 2.032-3.01-3.013 1.869-2.637-.66-4.487 1.986-1.986h4.243l-3.041 3.042.448 3.046 1.019 1.018 3.058.457 3.54-3.54zm-10 16.977h10v3h-24v-3h1v-5.5c0-1.381 1.119-2.5 2.5-2.5h4.391c2.609 0 4.104-1.994 4.109-2v1.5c0 1.815-1.215 3.887-3 4.89v3.61h2v-4h3zm-8-3h-2v3h2z"/></svg>
);
