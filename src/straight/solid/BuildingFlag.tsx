import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildingFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 13.5-8.085-4.5h-1.915v15h2v-6.047zm-8-10.5c0-1.654-1.346-3-3-3h-10c-1.654 0-3 1.346-3 3v21h12v-5h-3v-2h3v-2h-3v-2h3v-2h-3v-2h3v-2h-3v-2h3v2h4zm-9 16h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3z"/></svg>
);
