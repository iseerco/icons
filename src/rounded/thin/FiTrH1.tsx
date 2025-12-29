import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrH1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,4.5v15c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-7.5H3v7.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5V4.5c0-.276.224-.5.5-.5s.5.224.5.5v6.5h10v-6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm7.691-.462c-.188-.076-.402-.034-.545.108l-3,3c-.195.195-.195.512,0,.707s.512.195.707,0l2.146-2.146v13.793c0,.276.224.5.5.5s.5-.224.5-.5V4.5c0-.202-.122-.385-.309-.462Z"/></svg>

);
