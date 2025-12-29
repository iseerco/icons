import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoVaping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5 11c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm4.5 6.5c0 .879-.263 1.693-.7 2.386l-6.186-6.186c.693-.437 1.508-.7 2.386-.7 2.481 0 4.5 2.019 4.5 4.5zm-9 0c0-.879.263-1.693.7-2.386l6.186 6.186c-.693.437-1.508.7-2.386.7-2.481 0-4.5-2.019-4.5-4.5zm-.972 6.5h-12.028v-16h13c1.005 0 1.885.503 2.427 1.265-3.691.927-6.427 4.257-6.427 8.235 0 2.609 1.178 4.941 3.028 6.5zm-4.028-18h-8v-4h3v-2h2v2h3z"/></svg>
);
