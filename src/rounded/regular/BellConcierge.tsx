import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BellConcierge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.402,18c1.433,0,2.598-1.166,2.598-2.598v-1.402c0-6.28-4.849-11.448-11-11.958v-1.042c0-.552-.448-1-1-1s-1,.448-1,1v1.042C4.849,2.552,0,7.72,0,14v1.402c0,1.433,1.166,2.598,2.598,2.598h8.402v2H1c-.552,0-1,.448-1,1s.448,1,1,1h22c.552,0,1-.448,1-1s-.448-1-1-1h-10v-2h8.402ZM2,15.402v-1.402c0-5.514,4.486-10,10-10s10,4.486,10,10v1.402c0,.33-.269.598-.598.598H2.598c-.33,0-.598-.269-.598-.598Z"/></svg>

);
