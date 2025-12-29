import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M233.839,362.667h42.667v12.8c-1.323,39.232-41.344,39.189-42.667,0V362.667z M511.172,256  c-0.153,141.322-114.678,255.847-256,256c-339.2-12.8-339.051-499.2,0-512C396.494,0.153,511.019,114.678,511.172,256z M148.505,224  c0,17.673,14.327,32,32,32s32-14.327,32-32s-14.327-32-32-32S148.505,206.327,148.505,224z M361.839,320H148.505v42.667h42.667v12.8  c2.837,95.893,125.205,95.787,128,0v-12.8h42.667V320z M361.839,224c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32  s14.327,32,32,32C347.512,256,361.839,241.673,361.839,224z"/>
</svg>

);
