import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrListTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 11.5c0 .829-.671 1.5-1.5 1.5h-3c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5h3c.829 0 1.5.671 1.5 1.5zm-1.5 6.5h-3c-.829 0-1.5.671-1.5 1.5s.671 1.5 1.5 1.5h3c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm-11-13h11c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5h-11c-.829 0-1.5.671-1.5 1.5s.671 1.5 1.5 1.5zm2 3h-4c-.828 0-1.5.672-1.5 1.5v.5h-3v-3h.5c.828 0 1.5-.672 1.5-1.5v-4c0-.828-.672-1.5-1.5-1.5h-4c-.828 0-1.5.672-1.5 1.5v4c0 .828.672 1.5 1.5 1.5h.5v11c0 2.206 1.794 4 4 4h2v.5c0 .828.672 1.5 1.5 1.5h4c.828 0 1.5-.672 1.5-1.5v-4c0-.828-.672-1.5-1.5-1.5h-4c-.828 0-1.5.672-1.5 1.5v.5h-2c-.551 0-1-.449-1-1v-5h3v.5c0 .828.672 1.5 1.5 1.5h4c.828 0 1.5-.672 1.5-1.5v-4c0-.828-.672-1.5-1.5-1.5z"/></svg>
);
