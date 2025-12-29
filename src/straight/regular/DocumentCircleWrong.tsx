import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DocumentCircleWrong = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.518,22H2V3c0-.551.448-1,1-1h8v7h9v-1.414L12.414,0H3C1.346,0,0,1.346,0,3v21h11.349c-.706-.571-1.325-1.244-1.831-2ZM13,3.414l3.586,3.586h-3.586v-3.586Zm4,6.586c-3.859,0-7,3.141-7,7s3.141,7,7,7,7-3.141,7-7-3.141-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Z"/>
</svg>

);
