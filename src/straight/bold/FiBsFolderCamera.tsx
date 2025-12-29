import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.558,15h-.696l-1.285-2h-4.037l-1.285,2h-.696c-.828,0-1.5,.672-1.5,1.5v7.5h11v-7.5c0-.828-.672-1.5-1.5-1.5Zm-4,6.5c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm5.5-12.5v4.349c-.338-.162-.702-.279-1.089-.325l-1.911-2.97v-.054h0v-3H3.058v12H11.058v3H.058V3.5C.058,1.57,1.628,0,3.558,0h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5v3.5h0Z"/>
</svg>

);
