import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrKeyboardBrightness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,16.5c0,.83-.67,1.5-1.5,1.5h-7c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h7c.83,0,1.5,.67,1.5,1.5Zm-5-6.5c.83,0,1.5-.67,1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v4c0,.83,.67,1.5,1.5,1.5ZM3.5,15H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H3.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm19,0h-2c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5h2c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm-.94-5.94c.59-.59,.59-1.54,0-2.12-.59-.59-1.54-.59-2.12,0l-2.5,2.5c-.59,.59-.59,1.54,0,2.12,.29,.29,.68,.44,1.06,.44s.77-.15,1.06-.44l2.5-2.5Zm-14.5,.38l-2.5-2.5c-.59-.59-1.54-.59-2.12,0-.59,.59-.59,1.54,0,2.12l2.5,2.5c.29,.29,.68,.44,1.06,.44s.77-.15,1.06-.44c.59-.59,.59-1.54,0-2.12Z"/></svg>

);
