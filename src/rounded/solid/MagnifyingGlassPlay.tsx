import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MagnifyingGlassPlay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.503 7.54 4.502 2.453-4.506 2.477.003-4.93zm15.204 16.167c-.391.391-1.023.391-1.414 0l-5.969-5.969c-1.725 1.412-3.927 2.262-6.324 2.262-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10c0 2.398-.85 4.6-2.262 6.324l5.969 5.969c.391.391.391 1.023 0 1.414zm-8.707-13.706c0-.721-.39-1.387-1.027-1.745l-4.498-2.464c-1.265-.771-3.025.258-2.975 1.738v4.939c-.05 1.474 1.701 2.507 2.964 1.745l4.508-2.47c.634-.35 1.027-1.021 1.027-1.744z"/></svg>
);
