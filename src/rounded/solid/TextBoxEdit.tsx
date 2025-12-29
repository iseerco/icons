import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextBoxEdit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,8v8c0,2.761-2.239,5-5,5h-2V3h2c2.761,0,5,2.239,5,5ZM15,3v18H5c-2.761,0-5-2.239-5-5v-8C0,5.239,2.239,3,5,3h10Zm-4,5c0-.553-.448-1-1-1h-6c-.552,0-1,.447-1,1s.448,1,1,1h2v7c0,.553.448,1,1,1s1-.447,1-1v-7h2c.552,0,1-.447,1-1Zm3,14c-.552,0-1,.447-1,1s.448,1,1,1c.768,0,1.469-.29,2-.766.531.476,1.232.766,2,.766.552,0,1-.447,1-1s-.448-1-1-1-1-.448-1-1h-2c0,.552-.449,1-1,1ZM18,2c.552,0,1-.447,1-1s-.448-1-1-1c-.768,0-1.469.29-2,.766-.531-.476-1.232-.766-2-.766-.552,0-1,.447-1,1s.448,1,1,1,1,.448,1,1h2c0-.552.449-1,1-1Z"/>
</svg>

);
