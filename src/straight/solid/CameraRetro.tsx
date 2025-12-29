import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraRetro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,12v-6c0-1.654,1.346-3,3-3h2V1h2v2h2.586l3-3h8.414c1.654,0,3,1.346,3,3v9h-6.084c-.477-2.834-2.948-5-5.916-5s-5.439,2.166-5.916,5H0Zm8,1c0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4-4,1.794-4,4Zm9.916,1c-.477,2.834-2.948,5-5.916,5s-5.439-2.166-5.916-5H0v10h24v-10h-6.084Z"/></svg>

);
