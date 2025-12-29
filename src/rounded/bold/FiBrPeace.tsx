import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPeace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm9,12c0,1.425-.333,2.773-.926,3.972l-6.574-6.574V3.126c4.251.716,7.5,4.423,7.5,8.874Zm-10.5,8.874c-1.857-.313-3.522-1.196-4.809-2.463l4.809-4.809v7.272Zm3-7.235l4.79,4.79c-1.285,1.257-2.943,2.133-4.79,2.444v-7.235Zm-3-10.514v6.235l-6.587,6.587c-.584-1.192-.913-2.532-.913-3.947,0-4.451,3.249-8.158,7.5-8.874Z"/></svg>

);
