import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.756,14.521l-4.607,4.503c-.635.635-1.663.635-2.298,0l-4.607-4.503c-.569-.556-.175-1.521.62-1.521h10.272c.795,0,1.189.966.62,1.521Zm-4.607-9.545c-.635-.635-1.663-.635-2.298,0l-4.607,4.503c-.569.556-.175,1.521.62,1.521h10.272c.795,0,1.189-.966.62-1.521l-4.607-4.503Zm10.851,7.024c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/>
</svg>

);
