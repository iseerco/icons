import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 16c0 4.411-3.589 8-8 8-4.388 0-7.959-3.552-7.997-7.931-.003-.043-.003-.069-.003-.069v-4l3 3v1c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.822-.993-3.502-2.592-4.383-2.447-1.349-3.908-3.689-3.908-6.262v-.866c-.604-.456-1-1.173-1-1.989 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5c0 .815-.396 1.532-1 1.989v.866c0 1.462.881 2.821 2.356 3.635 2.556 1.409 4.144 4.095 4.144 7.01z"/></svg>
);
