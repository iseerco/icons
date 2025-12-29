import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeoplePoll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,15H12c-1.654,0-3,1.346-3,3v1c0,1.654,1.346,3,3,3h9c1.654,0,3-1.346,3-3v-1c0-1.654-1.346-3-3-3Zm-10,4v-1c0-.552,.449-1,1-1h2v3h-2c-.551,0-1-.448-1-1Zm11,0c0,.552-.448,1-1,1h-5v-3h5c.552,0,1,.448,1,1v1Zm-1-17H12c-1.654,0-3,1.346-3,3v1c0,1.654,1.346,3,3,3h9c1.654,0,3-1.346,3-3v-1c0-1.654-1.346-3-3-3ZM11,6v-1c0-.552,.449-1,1-1h5v3h-5c-.551,0-1-.448-1-1Zm11,0c0,.552-.448,1-1,1h-2v-3h2c.552,0,1,.448,1,1v1Zm-18,0c1.654,0,3-1.346,3-3S5.654,0,4,0,1,1.346,1,3s1.346,3,3,3Zm4,4v1h-2v-1c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v1H0v-1c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3Zm-1,6c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm1,7v1h-2v-1c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v1H0v-1c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3Z"/></svg>

);
