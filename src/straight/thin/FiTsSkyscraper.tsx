import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSkyscraper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 11h-.5v-3.5c0-1.378-1.122-2.5-2.5-2.5h-3v-5h-1v5h-3c-1.378 0-2.5 1.122-2.5 2.5v3.5h-.5c-1.378 0-2.5 1.122-2.5 2.5v10.5h1v-10.5c0-.827.673-1.5 1.5-1.5h13c.827 0 1.5.673 1.5 1.5v10.5h1v-10.5c0-1.378-1.122-2.5-2.5-2.5zm-11.5 0v-3.5c0-.827.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5v3.5zm3 5h1v3h-1zm0 5h1v3h-1zm3-5h1v3h-1zm0 5h1v3h-1zm3-5h1v3h-1zm0 5h1v3h-1zm-9-5h1v3h-1zm0 5h1v3h-1z"/></svg>
);
