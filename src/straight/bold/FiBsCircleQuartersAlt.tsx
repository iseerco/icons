import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleQuartersAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm2.121,12l5.212-5.212c1.049,1.472,1.667,3.271,1.667,5.212s-.618,3.741-1.667,5.212l-5.212-5.212Zm3.091-7.333l-5.212,5.212-5.212-5.212c1.472-1.049,3.271-1.667,5.212-1.667s3.741.618,5.212,1.667Zm-12.546,2.121l5.212,5.212-5.212,5.212c-1.049-1.472-1.667-3.271-1.667-5.212s.618-3.741,1.667-5.212Zm2.121,12.546l5.212-5.212,5.212,5.212c-1.472,1.049-3.271,1.667-5.212,1.667s-3.741-.618-5.212-1.667Z"/></svg>

);
