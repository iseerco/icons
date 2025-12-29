import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrParagraphLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,12h3v2.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V3h2v11.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V3h.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5h-11.5C5.691,0,3,2.691,3,6s2.691,6,6,6Zm0-9h3v6h-3c-1.654,0-3-1.346-3-3s1.346-3,3-3Zm14,16.5c0,.828-.672,1.5-1.5,1.5H6v1.499c0,.891-1.077,1.337-1.707.707l-2.974-2.974c-.426-.426-.426-1.116,0-1.542l2.974-2.974c.63-.63,1.707-.184,1.707.707v1.576h15.5c.828,0,1.5.672,1.5,1.5Z"/></svg>

);
