import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGermanyCountryCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5 8h-2.5v8h2.5c1.378 0 2.5-1.121 2.5-2.5v-3c0-1.379-1.122-2.5-2.5-2.5zm1.5 5.5c0 .827-.673 1.5-1.5 1.5h-1.5v-6h1.5c.827 0 1.5.673 1.5 1.5zm2-5.5h4v1h-3v2.5h3v1h-3v2.5h3v1h-4zm8.5-5h-19c-1.378 0-2.5 1.121-2.5 2.5v15.5h24v-15.5c0-1.379-1.122-2.5-2.5-2.5zm1.5 17h-22v-14.5c0-.827.673-1.5 1.5-1.5h19c.827 0 1.5.673 1.5 1.5z"/></svg>
);
