import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Reflect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 13h-24v-2h24zm-15.114-12.573-.1-.068a2.5 2.5 0 0 0 -3.786 2.141v6.5h14.916zm-.1 23.214 11.13-8.641h-14.916v6.5a2.494 2.494 0 0 0 3.787 2.143z"/></svg>
);
