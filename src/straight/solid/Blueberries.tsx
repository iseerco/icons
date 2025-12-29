import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blueberries = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,7C3.813,7,0,10.813,0,15.5s3.813,8.5,8.5,8.5,8.5-3.813,8.5-8.5-3.813-8.5-8.5-8.5Zm4.5,7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2Zm11-5.5c0,3.454-2.074,6.427-5.038,7.756.018-.251.038-.501.038-.756,0-2.455-.853-4.71-2.27-6.5h1.27v-2h2v-2h-2v-2h-2v2h-2v1.573c-1.602-.991-3.482-1.573-5.5-1.573-.255,0-.505.02-.756.038C9.073,2.074,12.046,0,15.5,0c4.687,0,8.5,3.813,8.5,8.5Z"/>
</svg>

);
