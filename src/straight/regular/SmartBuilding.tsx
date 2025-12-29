import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmartBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8 12h3v2h-3zm5 2h3v-2h-3zm-5-8h3v-2h-3zm5 0h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm5 11h2.277c.346-.595.984-1 1.723-1 1.105 0 2 .895 2 2s-.895 2-2 2c-.738 0-1.376-.405-1.723-1h-4.277v-5h-3v2.277c.595.346 1 .984 1 1.723 0 1.105-.895 2-2 2s-2-.895-2-2c0-.738.405-1.376 1-1.723v-2.277h-3v5h-4.277c-.346.595-.984 1-1.723 1-1.105 0-2-.895-2-2s.895-2 2-2c.738 0 1.376.405 1.723 1h2.277v-3h-6v-2h4v-13c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v13h4v2h-6zm-12-5h12v-13c0-.551-.448-1-1-1h-10c-.552 0-1 .449-1 1z"/></svg>
);
