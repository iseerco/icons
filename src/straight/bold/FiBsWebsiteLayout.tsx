import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWebsiteLayout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 1h-17c-1.933 0-3.5 1.567-3.5 3.5v18.5h24v-18.5c0-1.933-1.567-3.5-3.5-3.5zm-11 2c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm16.5 17h-18v-12h18zm-2-7h-14v-3h14zm-14 5v-3h3v3zm9 0h-4v-3h4zm5 0h-3v-3h3z"/></svg>
);
