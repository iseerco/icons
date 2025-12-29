import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilterSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.284,14.87l5.716-5.881v-3.989c0-1.654-1.346-3-3-3H4c-.179,0-.355,.025-.529,.057L1.457,.043,.043,1.457,22.543,23.957l1.414-1.414-7.673-7.673Zm-1.284,4.386v4.744l-6-4.5v-3.309L2,8.989v-2.813l13,13.079Z"/></svg>

);
