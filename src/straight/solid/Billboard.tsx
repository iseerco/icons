import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Billboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 7c0-1.654-1.346-3-3-3h-1v-2h1v-2h-4v2h1v2h-5v-2h1v-2h-4v2h1v2h-5v-2h1v-2h-4v2h1v2h-1c-1.654 0-3 1.346-3 3v13h11v4h2v-4h11z"/></svg>
);
