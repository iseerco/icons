import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StaplerPaper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.643 9.365 6.032 6.019-8.634 8.616-8.377-8.358c-.885-.887-.885-2.328 0-3.214l3.117-3.11 3.955 3.947 3.908-3.9zm-1.439-1.386h-4.939l2.47 2.464 2.47-2.464zm-.21-4.36-1.346-.359.339-1.437c.318-1.295 1.635-2.081 2.929-1.748l10.393 2.772c.986.244 1.679 1.127 1.679 2.141l.011 4.985h-9.006l-1.999-1.995h4.998v-1.995h-7.997v-2.363zm9.996 3.362c0 .551.448.997 1 .997s1-.447 1-.997-.448-.997-1-.997-1 .447-1 .997z"/></svg>
);
