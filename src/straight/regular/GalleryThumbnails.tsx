import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GalleryThumbnails = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,15H0V3C0,1.35,1.35,0,3,0H21c1.65,0,3,1.35,3,3V15ZM2,13H22V3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1V13Zm4,11H0v-6H6v6Zm-4-2h2v-2H2v2Zm22,2h-6v-6h6v6Zm-4-2h2v-2h-2v2Zm-5,2h-6v-6h6v6Zm-4-2h2v-2h-2v2Z"/></svg>

);
