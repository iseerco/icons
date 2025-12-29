import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBuildingFoundation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 0v4.418l-7.5-3.92v-.498h-1v.498l-7.5 3.92v-4.418h-1v19.43l8.742 4.57h.564l8.694-4.571v-19.429zm-8.5 1.627v7.839l-7.5-3.919zm-7.5 5.047 6.651 3.404-6.651 3.549zm7.5 4.161v7.839l-7.5-3.919 7.5-3.919zm8.5 7.99-7.941 4.175-8.059-4.176v-2.941l8 4.181 8-4.181zm-7.5-.151v-7.839l7.5 3.919-7.5 3.919zm7.5-5.048-6.651-3.476 6.651-3.476v6.953zm-7.5-4.161v-7.838l7.5 3.919z"/></svg>
);
