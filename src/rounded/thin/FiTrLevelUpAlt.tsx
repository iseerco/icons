import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrLevelUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.499,.419c-.533-.539-1.465-.539-1.998,0L6.413,5.573c-.406,.411-.523,1.022-.3,1.557,.225,.537,.723,.87,1.3,.87h4.587v11.5c0,1.93-1.57,3.5-3.5,3.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H8.5c2.481,0,4.5-2.019,4.5-4.5V8h4.587c.577,0,1.075-.333,1.3-.87,.224-.534,.106-1.146-.3-1.557L13.499,.419Zm4.465,6.325c-.031,.077-.133,.256-.377,.256H7.413c-.244,0-.346-.179-.377-.256-.026-.062-.097-.28,.088-.468L12.212,1.122c.078-.079,.18-.122,.288-.122s.21,.043,.288,.122l5.088,5.154c.185,.188,.114,.405,.088,.468Z"/></svg>

);
