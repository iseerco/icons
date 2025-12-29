import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashRestoreAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,4h-3.101c-.465-2.279-2.485-4-4.899-4h-2c-2.414,0-4.435,1.721-4.899,4h-3.101c-.552,0-1,.448-1,1s.448,1,1,1h1v13c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V6h1c.552,0,1-.448,1-1s-.448-1-1-1Zm-10-2h2c1.304,0,2.415.836,2.828,2h-7.656c.413-1.164,1.524-2,2.828-2Zm4.707,11.895c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293v4.398c0,.552-.448,1-1,1s-1-.448-1-1v-4.398l-1.293,1.293c-.391.391-1.023.391-1.414,0s-.391-1.023,0-1.414l1.614-1.614c1.154-1.154,3.032-1.154,4.187,0l1.614,1.614c.391.391.391,1.023,0,1.414Z"/></svg>

);
