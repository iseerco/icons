import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CopyAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.86 5h-4.86v-4.984zm-6.86 2v-7h-5a3 3 0 0 0 -3 3v16h15v-12zm9 .01v14.028h-12v2.962h15v-14z"/></svg>
);
