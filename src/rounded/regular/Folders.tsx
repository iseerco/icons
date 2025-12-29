import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Folders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,3h-3c-.154,0-.31-.036-.447-.105l-3.156-1.578c-.415-.207-.878-.316-1.341-.316h-2.056c-2.757,0-5,2.243-5,5V14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm-10,0h2.056c.154,0,.31,.036,.447,.105l3.155,1.578c.414,.207,.878,.316,1.342,.316h3c1.304,0,2.415,.836,2.828,2H6v-1c0-1.654,1.346-3,3-3Zm10,14H9c-1.654,0-3-1.346-3-3v-5H22v5c0,1.654-1.346,3-3,3Zm1,5c0,.553-.447,1-1,1H5c-2.757,0-5-2.243-5-5V8c0-.553,.448-1,1-1s1,.447,1,1v10c0,1.654,1.346,3,3,3h14c.553,0,1,.447,1,1Z"/></svg>

);
