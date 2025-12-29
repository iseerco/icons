import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dishwasher = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 8v-3c0-2.757-2.243-5-5-5h-10c-2.757 0-5 2.243-5 5v3zm-7.5-5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-.5 14c0 1.936-.751 3-1 3s-1-1.064-1-3 .751-3 1-3 1 1.064 1 3zm-7-7v9c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-9zm6 12c-1.71 0-3-2.149-3-5s1.29-5 3-5 3 2.149 3 5-1.29 5-3 5zm3.61-.015c.873-1.241 1.39-2.976 1.39-4.985s-.517-3.744-1.39-4.985c1.908.082 3.39 2.235 3.39 4.985s-1.482 4.902-3.39 4.985zm4 0c.873-1.241 1.39-2.976 1.39-4.985s-.517-3.744-1.39-4.985c1.908.082 3.39 2.235 3.39 4.985s-1.482 4.902-3.39 4.985z"/></svg>
);
