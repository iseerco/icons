import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlayPause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,21c-.553,0-1-.448-1-1V4c0-.552,.447-1,1-1s1,.448,1,1V20c0,.552-.447,1-1,1Zm-4,0c-.553,0-1-.448-1-1V4c0-.552,.447-1,1-1s1,.448,1,1V20c0,.552-.447,1-1,1Zm-13.673-.271c-.509,0-1.023-.122-1.509-.367-1.139-.578-1.818-1.683-1.818-2.958V6.597c0-1.275,.679-2.381,1.817-2.958,1.119-.567,2.452-.457,3.46,.285l7.368,5.402c.86,.631,1.354,1.606,1.354,2.674s-.494,2.043-1.355,2.674l-7.368,5.403c-.588,.432-1.265,.651-1.949,.651Z"/></svg>

);
