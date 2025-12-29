import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Billboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 4.101v-2.101c.553 0 1-.447 1-1s-.447-1-1-1h-2c-.553 0-1 .447-1 1s.447 1 1 1v2h-5v-2c.553 0 1-.447 1-1s-.447-1-1-1h-2c-.553 0-1 .447-1 1s.447 1 1 1v2h-5v-2c.553 0 1-.447 1-1s-.447-1-1-1h-2c-.553 0-1 .447-1 1s.447 1 1 1v2.101c-2.279.465-4 2.485-4 4.899v6c0 2.757 2.243 5 5 5h6v3c0 .553.447 1 1 1s1-.447 1-1v-3h6c2.757 0 5-2.243 5-5v-6c0-2.414-1.721-4.434-4-4.899z"/></svg>
);
