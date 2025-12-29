import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CopyAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 5.086-5.086-5.086h-7.914a3 3 0 0 0 -3 3v17h16zm-14 12.914v-15a1 1 0 0 1 1-1h7v4h4v12zm18-9v15h-15v-2h13v-15z"/></svg>
);
