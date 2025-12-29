import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserTieHair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 12c-3.309 0-6-2.691-6-6h2.5c2.414 0 4.573-1.289 5.777-3.281-.559-.389-1.225-.624-1.941-.685-.88 1.203-2.282 1.966-3.836 1.966h-2.15c.826-2.327 3.043-4 5.65-4 3.309 0 6 2.691 6 6s-2.691 6-6 6zm-4 2c-2.757 0-5 2.243-5 5v5h7l1.385-6.923-2.051-3.077h-1.333zm8 0h-1.333l-2.051 3.077 1.385 6.923h7v-5c0-2.757-2.243-5-5-5z"/></svg>
);
