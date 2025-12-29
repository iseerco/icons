import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lead = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,12c-3.309,0-6-2.691-6-6S4.691,0,8,0s6,2.691,6,6-2.691,6-6,6Zm13,6h0c0-.552.448-1,1-1h1.91c-.423-2.507-2.403-4.486-4.91-4.91v1.91c0,.552-.448,1-1,1h0c-.552,0-1-.448-1-1v-1.91c-2.507.423-4.486,2.403-4.91,4.91h1.91c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1h-1.91c.423,2.507,2.403,4.486,4.91,4.91v-1.91c0-.552.448-1,1-1h0c.552,0,1,.448,1,1v1.91c2.507-.423,4.486-2.403,4.91-4.91h-1.91c-.552,0-1-.448-1-1Zm-11,0c0-1.25.295-2.428.806-3.482-.875-.329-1.818-.518-2.806-.518C3.589,14,0,17.589,0,22v1c0,.553.448,1,1,1h11.721c-1.665-1.466-2.721-3.607-2.721-6Z"/>
</svg>

);
