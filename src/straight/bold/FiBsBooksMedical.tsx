import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBooksMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,8h5v8h-5v-8Zm0,16h5v-5h-5v5Zm-7,0h5v-5H3v5ZM3,2v3h5V0h-3c-1.105,0-2,.895-2,2Zm17.966,5.51l-4.91.945,1.631,8.186,4.91-.945-1.631-8.186Zm-.567-2.946l-.567-2.946c-.209-1.085-1.257-1.795-2.342-1.586l-.982.189c-.763.147-1.34.709-1.543,1.408-.174-.927-.987-1.628-1.965-1.628h-3v5h5v-2.031l.489,2.54,4.91-.945Zm2.765,14.078l-4.91.945.825,4.413,4.91-.945-.825-4.413ZM5.5,8h-3v2.5H0v3h2.5v2.5h3v-2.5h2.5v-3h-2.5v-2.5Z"/></svg>

);
