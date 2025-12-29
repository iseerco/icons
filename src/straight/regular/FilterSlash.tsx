import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilterSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.284,14.87l5.716-5.881v-3.989c0-1.654-1.346-3-3-3H4c-.179,0-.355,.025-.529,.057L1.457,.043,.043,1.457,22.543,23.957l1.414-1.414-7.673-7.673Zm2.716-10.87c.551,0,1,.449,1,1v3.177l-5.13,5.278L5.414,4h13.586Zm-6,13.256l2,2v4.744l-6-4.5v-3.309L2,8.989v-2.813L11,15.379v3.121l2,1.5v-2.744Z"/></svg>

);
