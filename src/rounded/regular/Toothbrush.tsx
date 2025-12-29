import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Toothbrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3v-.412c0-.627-.373-1.191-.951-1.439-.568-.241-1.222-.126-1.669.299-.372.356-.862.553-1.38.553H6.693C3.801,2,1.244,3.738.181,6.43c-.314.794-.212,1.693.273,2.406.495.729,1.315,1.164,2.194,1.164h.352v8c-1.654,0-3,1.346-3,3s1.346,3,3,3h20c.553,0,1-.447,1-1s-.447-1-1-1H3c-.552,0-1-.448-1-1s.448-1,1-1h20c.553,0,1-.447,1-1s-.447-1-1-1h-2v-9.259c1.812-1.266,3-3.368,3-5.741ZM2.107,7.711c-.066-.098-.164-.3-.067-.547.76-1.922,2.587-3.164,4.653-3.164h13.307c.703,0,1.381-.182,1.978-.521-.242,2.533-2.381,4.521-4.976,4.521H2.648c-.311,0-.481-.202-.541-.289Zm8.893,2.289v8h-2v-8h2Zm2,0h2v8h-2v-8Zm-8,0h2v8h-2v-8Zm14,8h-2v-8h.002c.694,0,1.365-.102,1.998-.291v8.291Z"/></svg>

);
