import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramProject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,1h-2c-1.654,0-3,1.346-3,3H8c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v2c0,1.654,1.346,3,3,3h2c.297,0,.583-.044,.854-.125l4.517,7.68c-.237,.429-.372,.921-.372,1.445v2c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3v-2c0-1.654-1.346-3-3-3h-2c-.388,0-.758,.075-1.099,.209L7.478,7.689c.329-.482,.522-1.063,.522-1.689h8c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3v-2c0-1.654-1.346-3-3-3Z"/></svg>

);
