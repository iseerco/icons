import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWebsiteLayout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5 1h-19c-1.378 0-2.5 1.122-2.5 2.5v19.5h24v-19.5c0-1.378-1.121-2.5-2.5-2.5zm-19 1h19c.827 0 1.5.673 1.5 1.5v4.5h-22v-4.5c0-.827.673-1.5 1.5-1.5zm13.5 14v6h-8v-6zm-15-1v-6h22v6zm0 1h6v6h-6zm16 6v-6h6v6zm-14-17c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1z"/></svg>
);
