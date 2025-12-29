import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CastleTower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 22h-2v-21c0-.553-.448-1-1-1s-1 .447-1 1v2h-2v-2c0-.553-.448-1-1-1s-1 .447-1 1v2h-2v-2c0-.553-.448-1-1-1s-1 .447-1 1v2h-2v-2c0-.553-.448-1-1-1s-1 .447-1 1v21h-2c-.552 0-1 .447-1 1s.448 1 1 1h18c.552 0 1-.447 1-1s-.448-1-1-1zm-8-3c0 .553-.448 1-1 1s-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1zm0-5c0 .553-.448 1-1 1s-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1zm0-5c0 .553-.448 1-1 1s-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1z"/></svg>
);
