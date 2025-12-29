import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCloudDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.768 23h-3.968a5.792 5.792 0 0 1 -5.8-5.775 5.953 5.953 0 0 1 2.72-4.925 8.04 8.04 0 0 1 7.371-11.3 8.2 8.2 0 0 1 7.885 6 8.176 8.176 0 0 1 6.024 7.85 8.076 8.076 0 0 1 -.3 2.15h-3.19a5.066 5.066 0 0 0 .49-2.15 5.172 5.172 0 0 0 -4.49-5.1l-1.138-.15-.151-1.137a5.18 5.18 0 0 0 -5.13-4.463 4.935 4.935 0 0 0 -5.062 5.03 5.093 5.093 0 0 0 1.019 3.055l1.333 1.792-2.163.556a3.025 3.025 0 0 0 -2.218 2.792 2.789 2.789 0 0 0 2.8 2.775h.937zm7.232-3v-7h-3v7h-3l3.75 3.707a1 1 0 0 0 1.414 0l3.836-3.707z"/></svg>
);
