import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5.756,14.521l-4.607,4.503c-.635.635-1.663.635-2.298,0l-4.607-4.503c-.569-.556-.175-1.521.62-1.521h10.272c.795,0,1.189.966.62,1.521Zm-.62-3.521H6.864c-.795,0-1.189-.966-.62-1.521l4.607-4.503c.635-.635,1.663-.635,2.298,0l4.607,4.503c.569.556.175,1.521-.62,1.521Z"/>
</svg>

);
