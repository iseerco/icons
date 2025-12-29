import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlugEco = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 5v-3h-4v-2h-3v1h-3c-2.035 0-3.7 1.532-3.949 3.5h-4.801c-2.895 0-5.25 2.355-5.25 5.25v9.527c0 2.086 1.233 3.877 3 4.723v-14.25c0-1.24 1.01-2.25 2.25-2.25h4.801c.249 1.968 1.915 3.5 3.949 3.5h3v1h3v-2h4v-3h-4v-2zm-10 3c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1h3v4zm7 6c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3v-4c0-1.654-1.346-3-3-3zm1 7c0 .552-.448 1-1 1s-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1zm-9-4v4c0 .552.448 1 1 1s1-.448 1-1h2c0 1.654-1.346 3-3 3s-3-1.346-3-3v-4c0-1.654 1.346-3 3-3s3 1.346 3 3h-2c0-.552-.448-1-1-1s-1 .448-1 1zm-8-3h5v2h-3v2h2v2h-2v2h3v2h-5z"/></svg>
);
