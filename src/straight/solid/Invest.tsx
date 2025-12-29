import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Invest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,14.586V6.056c4.494.499,8,4.32,8,8.944,0,2.122-.739,4.074-1.972,5.615l-6.028-6.029Zm-10,.414c0,4.963,4.038,9,9,9,2.122,0,4.074-.738,5.614-1.971l-6.614-6.615V6.056c-4.494.499-8,4.32-8,8.944ZM14.596,4.596l1.414-1.414-2.596-2.596c-.779-.78-2.049-.78-2.828,0l-2.577,2.577,1.414,1.414,1.577-1.577v3.056c.328-.036.662-.056,1-.056s.672.019,1,.056v-3.056l1.596,1.596Z"/>
</svg>

);
