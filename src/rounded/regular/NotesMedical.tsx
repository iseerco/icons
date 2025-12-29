import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotesMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,13c0,.553-.447,1-1,1s-1-.447-1-1v-2h-2c-.553,0-1-.447-1-1s.447-1,1-1h2v-2c0-.553.447-1,1-1s1,.447,1,1v2h2c.553,0,1,.447,1,1s-.447,1-1,1h-2v2Zm9-8v8.373c0,1.053-.427,2.084-1.172,2.828l-2.627,2.627c-.744.745-1.775,1.172-2.828,1.172h-8.373c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h10c2.757,0,5,2.243,5,5Zm-15,13h8v-3c0-1.105.895-2,2-2h3V5c0-1.654-1.346-3-3-3h-10c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3Zm8,4H5c-1.654,0-3-1.346-3-3V7c0-.553-.447-1-1-1s-1,.447-1,1v12c0,2.757,2.243,5,5,5h12c.553,0,1-.447,1-1s-.447-1-1-1Z"/></svg>

);
