import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ImageSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.707,22.293l-1.536-1.536c.538-.813.829-1.771.829-2.757V6c0-2.757-2.243-5-5-5H6c-.986,0-1.943.291-2.757.829L1.707.293C1.316-.098.684-.098.293.293S-.098,1.316.293,1.707l22,22c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414Zm-7.707-12.293c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2ZM1,17.586V7.5c0-.404.244-.77.617-.924.375-.156.803-.07,1.09.217l4.543,4.543-6.25,6.25Zm16.424,4.797c-.155.374-.52.617-.924.617H6c-2.047,0-3.811-1.237-4.583-3.003l7.247-7.247,8.543,8.543c.286.286.372.716.217,1.09Z"/>
</svg>

);
