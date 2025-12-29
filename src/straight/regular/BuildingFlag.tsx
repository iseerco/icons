import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildingFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 13.5-8.085-4.5h-1.915v15h2v-6.047zm-8 2.162v-4.324l3.871 2.162zm-2-12.662c0-.552-.448-1-1-1h-10c-.552 0-1 .448-1 1v19h10v2h-12v-21c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v4h-2zm-7 12h-3v-2h3zm2-2h3v2h-3zm-5 4h3v2h-3zm5 0h3v2h-3zm-2-10h-3v-2h3zm2-2h3v2h-3zm-2 6h-3v-2h3zm2-2h3v2h-3z"/></svg>
);
