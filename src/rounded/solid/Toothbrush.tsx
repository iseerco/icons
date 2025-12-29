import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Toothbrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3v-.412c0-.627-.373-1.191-.951-1.439-.568-.241-1.222-.126-1.669.299-.372.356-.862.553-1.38.553H6.693C3.801,2,1.244,3.738.181,6.43c-.314.794-.212,1.693.273,2.406.495.729,1.315,1.164,2.194,1.164h.352v8c-1.654,0-3,1.346-3,3s1.346,3,3,3h20c.553,0,1-.447,1-1v-4c0-.553-.447-1-1-1h-2v-9.263c1.811-1.267,3-3.364,3-5.737Zm-11,7h2v8h-2v-8Zm-2,8h-2v-8h2v8Zm-6-8h2v8h-2v-8Zm14,8h-2v-8h.002c.694,0,1.364-.105,1.998-.294v8.294Z"/></svg>

);
