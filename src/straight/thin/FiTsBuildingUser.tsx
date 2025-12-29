import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBuildingUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 1h-11c-.827 0-1.5.673-1.5 1.5v20.5h11v1h-12v-21.5c0-1.379 1.122-2.5 2.5-2.5h11c1.379 0 2.5 1.121 2.5 2.5v8.523c-.381.288-.714.632-1 1.013v-9.536c0-.827-.673-1.5-1.5-1.5zm-6.5 12h-3v1h3zm2 1h3v-1h-3zm-5 4h3v-1h-3zm5 0h3v-1h-3zm-2-13h-3v1h3zm2 1h3v-1h-3zm-2 3h-3v1h3zm2 1h3v-1h-3zm12.5 9h-5c-1.379 0-2.5 1.121-2.5 2.5v2.5h1v-2.5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v2.5h1v-2.5c0-1.379-1.121-2.5-2.5-2.5zm-5.5-4c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm1 0c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2z"/></svg>
);
