import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildingXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 3c0-.552-.449-1-1-1h-10c-.551 0-1 .448-1 1v19h8.572l2 2h-12.572v-21c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v7.603l-2 2zm-7 10h-3v2h3zm5 0h-3v2h3zm-8 6h3v-2h-3zm5 0h3v-2h-3zm-2-14h-3v2h3zm5 0h-3v2h3zm-5 4h-3v2h3zm5 0h-3v2h3zm12 6.423-1.391-1.414-3.593 3.593-3.593-3.593-1.414 1.414 3.593 3.593-3.593 3.593 1.414 1.392 3.593-3.57 3.593 3.57 1.391-1.392-3.57-3.593z"/></svg>
);
