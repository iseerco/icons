import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTasks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 0h-17c-1.93 0-3.5 1.57-3.5 3.5v20.5h24v-20.5c0-1.93-1.57-3.5-3.5-3.5zm.5 3.5v2.5h-12v-3h11.5c.276 0 .5.224.5.5zm-12.327 8.925-1.209-1.112 1.387-1.441 1.244 1.145 2.307-2.395 1.398 1.43-2.303 2.392c-.744.744-2.058.746-2.823-.019zm-5.173-9.425h2.5v3h-3v-2.5c0-.276.224-.5.5-.5zm-.5 6h3v12h-3zm17.496 11.443c-.744.744-2.058.746-2.823-.019l-1.209-1.112 1.387-1.441 1.244 1.145 2.307-2.395 1.398 1.43-2.303 2.392zm-5.496-5.443v6h-6v-6h6v-6h6v6z"/></svg>
);
