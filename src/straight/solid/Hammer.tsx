import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hammer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="12.863 12.592 12.863 12.592 11.411 11.14 11.411 11.14 9.997 9.726 0 19.721 4.279 24 14.277 14.006 12.863 12.592"/><g><path d="M20.586,6.854L15.636,1.904c-1.228-1.228-2.859-1.904-4.596-1.904s-3.369,.676-4.597,1.904l-.707,.707L15.283,12.157l5.303-5.303Z"/><path d="M23.415,9.682l-1.414-1.414-5.303,5.303,1.415,1.414c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l2.475-2.475c.78-.78,.78-2.049,0-2.829Z"/></g></svg>

);
