import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSuperscript = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,.5v10c0,.276-.224.5-.5.5s-.5-.224-.5-.5V1.707l-2.146,2.146c-.195.195-.512.195-.707,0s-.195-.512,0-.707L23.146.146c.143-.144.358-.185.545-.108.187.077.309.26.309.462Zm-9.182,5.614c-.213-.177-.528-.145-.704.068l-6.614,8.032L.886,6.183c-.175-.213-.49-.245-.704-.068-.213.176-.244.49-.068.703l6.739,8.183L.114,23.183c-.176.213-.146.527.068.703.093.077.206.114.317.114.145,0,.288-.062.386-.183l6.614-8.032,6.614,8.032c.099.12.242.183.386.183.112,0,.224-.037.317-.114.213-.176.244-.49.068-.703l-6.739-8.183,6.739-8.183c.176-.213.146-.527-.068-.703Z"/></svg>

);
