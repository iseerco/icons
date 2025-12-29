import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGalleryThumbnails = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,15H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5V15ZM3,12H21V3.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5V12Zm3,6H0v6H6v-6Zm18,0h-6v6h6v-6Zm-9,0h-6v6h6v-6Z"/></svg>

);
