import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsListTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 11h6v1h-6zm0 9h6v-1h-6zm-8-17v1h14v-1zm-2 5h7v7h-7v-3h-4v8h4v-3h7v7h-7v-3h-5v-14h-3v-7h7v7h-3v4h4zm-7-2h5v-5h-5zm8 17h5v-5h-5zm0-9h5v-5h-5z"/></svg>
);
