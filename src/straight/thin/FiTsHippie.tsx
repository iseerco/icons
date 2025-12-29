import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHippie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4 8h1v8h-1v-3.5h-3v3.5h-1v-8h1v3.5h3zm2 8h1v-8h-1zm12 0h1v-8h-1zm-6-5.5c0 1.379-1.122 2.5-2.5 2.5h-.5v3h-1v-8h1.5c1.378 0 2.5 1.121 2.5 2.5zm-1 0c0-.827-.673-1.5-1.5-1.5h-.5v3h.5c.827 0 1.5-.673 1.5-1.5zm6 0c0 1.379-1.122 2.5-2.5 2.5h-.5v3h-1v-8h1.5c1.378 0 2.5 1.121 2.5 2.5zm-1 0c0-.827-.673-1.5-1.5-1.5h-.5v3h.5c.827 0 1.5-.673 1.5-1.5zm8-1.5v-1h-4v8h4v-1h-3v-2.5h3v-1h-3v-2.5z"/></svg>
);
