import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AlignSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.414,11l3,3h7.586c.552,0,1,.448,1,1s-.448,1-1,1h-5.586l3,3h2.586c.552,0,1,.448,1,1s-.448,1-1,1h-.586l1.293,1.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098.684.293.293S1.316-.098,1.707.293l3.707,3.707h17.586c.552,0,1,.448,1,1s-.448,1-1,1H7.414l3,3h12.586c.552,0,1,.448,1,1s-.448,1-1,1h-10.586Zm2.586,8H1c-.552,0-1,.448-1,1s.448,1,1,1h14c.552,0,1-.448,1-1s-.448-1-1-1Zm-14-3h9c.552,0,1-.448,1-1s-.448-1-1-1H1c-.552,0-1,.448-1,1s.448,1,1,1Zm0-5h4c.552,0,1-.448,1-1s-.448-1-1-1H1c-.552,0-1,.448-1,1s.448,1,1,1Z"/></svg>

);
