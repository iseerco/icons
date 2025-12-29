import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFollowers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2.5 19h2.5v1h-2.5c-.827 0-1.5.673-1.5 1.5v2.5h-1v-2.5c0-1.379 1.122-2.5 2.5-2.5zm4.5-4.5c0 1.379-1.122 2.5-2.5 2.5s-2.5-1.121-2.5-2.5 1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5zm-1 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5 1.5-.673 1.5-1.5zm15.5 4.5h-2.5v1h2.5c.827 0 1.5.673 1.5 1.5v2.5h1v-2.5c0-1.379-1.121-2.5-2.5-2.5zm-2-2c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5zm0-1c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5zm-10.5-5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm1 0c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zm4.5 5h-5c-1.378 0-2.5 1.121-2.5 2.5v5.5h1v-5.5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v5.5h1v-5.5c0-1.379-1.121-2.5-2.5-2.5zm5.5-12v-4h-1v4h-4v1h4v4h1v-4h4v-1z"/></svg>
);
