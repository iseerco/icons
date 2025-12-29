import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSocialDistance = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.297 5.098c-.395-.355-.395-.974 0-1.328l3.703-3.389v2.619h16v-2.619l3.703 3.389c.395.355.395.974 0 1.328l-3.703 3.389v-2.487h-16v2.487zm1.703 8.402c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5zm16.5-3.5c-1.868 0-3.486 1.435-3.776 3.342l-.753 4.158c.668-.307 1.408-.484 2.19-.484h4.678c.782 0 1.522.176 2.19.484l-.753-4.158c-.29-1.908-1.908-3.342-3.776-3.342zm-10.5 9h-5c-1.654 0-3 1.346-3 3v2h3v-2h5v2h3v-2c0-1.654-1.346-3-3-3zm13 0h-5c-1.654 0-3 1.346-3 3v2h3v-2h5v2h3v-2c0-1.654-1.346-3-3-3z"/></svg>
);
