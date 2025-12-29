import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoctorBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 4h-1.101c-.465-2.279-2.484-4-4.899-4h-2c-2.414 0-4.434 1.721-4.899 4h-1.101c-2.757 0-5 2.243-5 5v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-10c0-2.757-2.243-5-5-5zm-8-2h2c1.302 0 2.402.839 2.816 2h-7.631c.414-1.161 1.514-2 2.816-2zm-6 4h14c1.654 0 3 1.346 3 3v7h-20v-7c0-1.654 1.346-3 3-3zm14 16h-14c-1.654 0-3-1.346-3-3v-1h4v1c0 .552.448 1 1 1s1-.448 1-1v-1h8v1c0 .552.448 1 1 1s1-.448 1-1v-1h4v1c0 1.654-1.346 3-3 3zm-10-11c0-.552.448-1 1-1h1v-1c0-.552.448-1 1-1s1 .448 1 1v1h1c.552 0 1 .448 1 1s-.448 1-1 1h-1v1c0 .552-.448 1-1 1s-1-.448-1-1v-1h-1c-.552 0-1-.448-1-1z"/></svg>
);
