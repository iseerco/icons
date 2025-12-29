import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WebsiteLayout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 15h-24v-5h24zm-8 8v-6h-8v6zm-16-15v-2c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v2zm7-3.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-4 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm3 12.5h-6v1c0 2.757 2.243 5 5 5h1zm12 0v6h1c2.757 0 5-2.243 5-5v-1z"/></svg>
);
