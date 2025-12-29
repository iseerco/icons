import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blueberries = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,7C3.813,7,0,10.813,0,15.5s3.813,8.5,8.5,8.5,8.5-3.813,8.5-8.5-3.813-8.5-8.5-8.5Zm3.5,7h-1v1c0,.552-.448,1-1,1h0c-.552,0-1-.448-1-1v-1h-1c-.552,0-1-.448-1-1h0c0-.552.448-1,1-1h1v-1c0-.552.448-1,1-1h0c.552,0,1,.448,1,1v1h1c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1Zm11.915-6.718c.554,3.961-1.645,7.491-4.953,8.973.018-.251.038-.501.038-.756,0-2.455-.853-4.71-2.27-6.5h.27s1,0,1-1v-1h1c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1h-1v-1c0-.552-.448-1-1-1h0c-.552,0-1,.448-1,1v1h-1c-.552,0-1,.448-1,1v.573c-1.602-.991-3.482-1.573-5.5-1.573-.255,0-.505.02-.756.038C9.227,1.73,12.757-.468,16.718.085c3.69.516,6.681,3.507,7.197,7.197Z"/>
</svg>

);
