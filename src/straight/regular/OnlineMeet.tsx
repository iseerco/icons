import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OnlineMeet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10 12c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zm3 7v2h5v2h-12v-2h5v-2h-11v-15c0-.811.333-1.599.914-2.161.587-.568 1.367-.865 2.196-.839h17.951c.752-.018 1.446.26 2.001.795.596.574.938 1.378.938 2.205v15zm6-16c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3 14h6.5c0-1.105.895-2 2-2h3c1.105 0 2 .895 2 2h6.5v-8c0-1.105-.895-2-2-2h-2c-1.105 0-2 .895-2 2h-1c0-1.105-.895-2-2-2h-2c-1.105 0-2 .895-2 2h-1c0-1.105-.895-2-2-2h-2c-1.105 0-2 .895-2 2z"/></svg>
);
