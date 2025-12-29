import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AsseptDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.414 0h-9.414a3 3 0 0 0 -3 3v21h20v-16.414zm.586 3.414 3.586 3.586h-3.586zm-11 18.586v-19a1 1 0 0 1 1-1h8v7h7v13zm11.293-8.878 1.414 1.414-3.586 3.585a3 3 0 0 1 -4.243 0l-1.585-1.585 1.414-1.414 1.586 1.585a1.023 1.023 0 0 0 1.414 0z"/></svg>
);
