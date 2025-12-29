import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserForbidden = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm10,12c0,2.398-.85,4.599-2.262,6.324l-5.218-5.218c.91-.737,1.48-1.859,1.48-3.106,0-2.206-1.794-4-4-4-1.226,0-2.355,.568-3.101,1.486l-3.224-3.224c1.725-1.412,3.927-2.262,6.324-2.262,5.514,0,10,4.486,10,10Zm-20,0c0-2.398,.85-4.599,2.262-6.324l14.063,14.062c-.526,.431-1.099,.805-1.706,1.123l-4.861-4.861h-2.758c-1.654,0-3,1.346-3,3v.981c-2.423-1.827-4-4.719-4-7.981Z"/>
</svg>

);
