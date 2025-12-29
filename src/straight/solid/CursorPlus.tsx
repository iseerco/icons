import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0 -8-8zm3 9h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm-14.146-3.09-4.71-13.766 13.766 4.71-6.158 2.9z"/></svg>
);
