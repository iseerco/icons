import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsSplitRightAndLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.414,7.414l-4.5,4.5-1.414-1.414,3.5-3.5h-5c-1.654,0-3,1.346-3,3v14h-2V10c0-1.654-1.346-3-3-3H3l3.5,3.5-1.414,1.414L.586,7.414c-.78-.779-.78-2.049,0-2.828L5.086,.086l1.414,1.414-3.5,3.5h5c1.641,0,3.088,.806,4,2.031,.912-1.225,2.359-2.031,4-2.031h5l-3.5-3.5L18.914,.086l4.5,4.5c.78,.779,.78,2.049,0,2.828Z"/>
</svg>

);
