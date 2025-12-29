import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSpine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 6v-3h-3v-.5c0-1.379-1.122-2.5-2.5-2.5h-7c-1.378 0-2.5 1.121-2.5 2.5v.5h-3v3h3v4.5h-3v3h3v4.5h-3v3h3v.5c0 1.379 1.122 2.5 2.5 2.5h7c1.378 0 2.5-1.121 2.5-2.5v-.5h3v-3h-3v-4.5h3v-3h-3v-4.5zm-1-2v1h-2v-1zm-3 11h-10v-6h10zm-8.5-14h7c.827 0 1.5.673 1.5 1.5v5.5h-10v-5.5c0-.827.673-1.5 1.5-1.5zm-4.5 4v-1h2v1zm0 7.5v-1h2v1zm0 7.5v-1h2v1zm11.5 3h-7c-.827 0-1.5-.673-1.5-1.5v-5.5h10v5.5c0 .827-.673 1.5-1.5 1.5zm4.5-4v1h-2v-1zm0-7.5v1h-2v-1z"/></svg>
);
