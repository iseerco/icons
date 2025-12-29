import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cursor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.278 23.979-4.2-8.24-5.078 4.477v-18.197a2 2 0 0 1 3.212-1.591l13.905 12.008-6.617.734 4.145 8.13zm-3.594-11.445 4.474 8.766 1.789-.894-4.547-8.906 4.938-.547-10.386-8.973.042 13.81z"/></svg>
);
