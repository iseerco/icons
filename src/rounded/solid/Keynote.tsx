import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Keynote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,16h-.28l-.86-2.582c-.682-2.045-2.588-3.418-4.743-3.418H6.883c-.3,0-.595,.028-.883,.079v-3.079c0-1.654,1.346-3,3-3h.172c.413,1.164,1.524,2,2.828,2h3c1.654,0,3-1.346,3-3s-1.346-3-3-3h-3c-1.304,0-2.415,.836-2.828,2h-.172c-2.757,0-5,2.243-5,5v3.914c-.851,.6-1.514,1.466-1.861,2.505l-.859,2.581h-.279c-.553,0-1,.448-1,1s.447,1,1,1h.975c.02,0,.039,0,.058,0H11v4h-3c-.553,0-1,.448-1,1s.447,1,1,1h8c.553,0,1-.448,1-1s-.447-1-1-1h-3v-4h10c.553,0,1-.448,1-1s-.447-1-1-1Z"/></svg>

);
