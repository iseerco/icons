import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoorHanger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.486.018c-2.278.148-4.165 1.451-5.331 3.277-1.023 1.602.226 3.704 2.127 3.704.852 0 1.595-.473 2.091-1.165.363-.506.956-.835 1.626-.835 1.215 0 2.176 1.083 1.973 2.336-.16.983-1.083 1.664-2.08 1.664h-2.893c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4h6c2.209 0 4-1.791 4-4v-12.999c.001-4.03-3.422-7.275-7.513-6.982z"/></svg>
);
