import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0 -8-8zm0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6zm1-7h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm-16.856-14.856 4.71 13.766 2.9-6.158 6.158-2.9zm6.1 6.1-1.098 2.346-1.79-5.234 5.234 1.79z"/></svg>
);
