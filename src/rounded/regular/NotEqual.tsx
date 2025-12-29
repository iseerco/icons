import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,16c0,.553-.447,1-1,1h-12.174l-2.915,6.414c-.167.368-.53.586-.911.586-.138,0-.278-.028-.413-.09-.503-.229-.725-.821-.496-1.324l2.539-5.586H1c-.553,0-1-.447-1-1s.447-1,1-1h8.538l2.727-6H1c-.553,0-1-.447-1-1s.447-1,1-1h12.174l2.915-6.414c.228-.501.816-.728,1.324-.496.503.229.725.821.496,1.324l-2.539,5.586h7.629c.553,0,1,.447,1,1s-.447,1-1,1h-8.538l-2.727,6h11.265c.553,0,1,.447,1,1Z"/>
</svg>

);
