import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H2v-2H22v2Zm2-8c0-1.654-1.346-3-3-3h-5c-.404,0-.652-.223-.765-.356-.112-.133-.289-.416-.22-.814,.579-3.331,.984-6.55,.984-7.829,0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.277,.405,4.497,.985,7.829,.069,.398-.108,.681-.22,.814s-.36,.356-.765,.356H3c-1.654,0-3,1.346-3,3v4H24v-4Zm-22,0c0-.551,.449-1,1-1h5c.887,0,1.724-.39,2.295-1.069,.571-.68,.812-1.57,.66-2.445-.554-3.181-.956-6.33-.956-7.486,0-1.103,.897-2,2-2s2,.897,2,2c0,1.159-.401,4.307-.955,7.486-.152,.874,.088,1.765,.659,2.444,.572,.68,1.408,1.069,2.296,1.069h5c.552,0,1,.449,1,1v2H2v-2Z"/></svg>

);
