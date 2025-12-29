import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsListCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,6c-.668,0-1.296-.26-1.768-.732l-1.586-1.585.707-.707,1.586,1.585c.566.566,1.555.566,2.121,0l3.586-3.585.707.707-3.586,3.585c-.472.472-1.1.732-1.768.732Zm20-2h-12v1h12v-1ZM5.768,13.268l3.586-3.585-.707-.707-3.586,3.585c-.566.566-1.555.566-2.121,0l-1.586-1.585-.707.707,1.586,1.585c.472.472,1.1.732,1.768.732s1.296-.26,1.768-.732Zm18.232-1.268h-12v1h12v-1ZM5.768,21.268l3.586-3.585-.707-.707-3.586,3.585c-.566.566-1.555.566-2.121,0l-1.586-1.585-.707.707,1.586,1.585c.472.472,1.1.732,1.768.732s1.296-.26,1.768-.732Zm18.232-1.268h-12v1h12v-1Z"/>
</svg>

);
