import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoorHanger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0c-3.427 0-6.328 2.454-6.896 5.834l-.196 1.166h5.092c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2h-4c-1.654 0-3 1.346-3 3v12h14v-17c0-3.86-3.14-7-7-7z"/></svg>
);
