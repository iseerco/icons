import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Barcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,22c-.553,0-1-.448-1-1V3c0-.552,.447-1,1-1s1,.448,1,1V21c0,.552-.447,1-1,1Zm5-1V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm15,0V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm-8,0V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm-3-.5V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Zm8,0V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Zm6,.5V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Z"/></svg>

);
