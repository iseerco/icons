import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BabyCradle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 6v4h-20v-5.504c.893-.634 3.433-2.202 7-2.46v2.241c-.595.346-1 .984-1 1.723 0 1.105.895 2 2 2s2-.895 2-2c0-.738-.405-1.376-1-1.723v-4.277h-1c-6.311.125-9.303 3.032-10 3.54v20.46h2v-2h20v2h2v-18zm-15 14h-2v-8h2zm4 0h-2v-8h2zm4 0h-2v-8h2zm4 0h-2v-8h2z"/></svg>
);
