import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashUndoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,4h-3.101c-.465-2.279-2.485-4-4.899-4h-2c-2.414,0-4.435,1.721-4.899,4h-3.101c-.553,0-1,.448-1,1s.447,1,1,1h1v13c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V6h1c.553,0,1-.448,1-1s-.447-1-1-1Zm-10-2h2c1.304,0,2.415.836,2.828,2h-7.656c.413-1.164,1.524-2,2.828-2Zm7,17c0,1.654-1.346,3-3,3h-6c-1.654,0-3-1.346-3-3V6h12v13Zm-2-3v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-1.103-.897-2-2-2h-1.898l1.293,1.293c.391.391.391,1.024,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.613-1.614c-1.154-1.154-1.154-3.032,0-4.187l1.613-1.614c.391-.391,1.023-.391,1.414,0,.391.39.391,1.023,0,1.414l-1.293,1.293h1.898c2.206,0,4,1.794,4,4Z"/></svg>

);
