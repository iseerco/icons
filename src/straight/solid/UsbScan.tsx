import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UsbScan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2 7h-2v-4c0-1.654 1.346-3 3-3h4v2h-4c-.552 0-1 .448-1 1zm19-7h-4v2h4c.552 0 1 .448 1 1v4h2v-4c0-1.654-1.346-3-3-3zm1 21c0 .552-.448 1-1 1h-4v2h4c1.654 0 3-1.346 3-3v-4h-2zm-20 0v-4h-2v4c0 1.654 1.346 3 3 3h4v-2h-4c-.552 0-1-.448-1-1zm4-6c0 3.309 2.691 6 6 6s6-2.691 6-6zm10-9v-3h-8v3zm2 5c0-1.657-1.343-3-3-3h-6c-1.657 0-3 1.343-3 3h-6v2h24v-2z"/></svg>
);
