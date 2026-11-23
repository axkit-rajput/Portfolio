import React, { useState } from 'react';

interface ProfilePhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showAvailability?: boolean;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  className = '',
  size = 'lg',
  showAvailability = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 text-xl',
    xl: 'w-32 h-32 sm:w-36 sm:h-36 text-2xl',
  };

  const indicatorSizes = {
    sm: 'w-2.5 h-2.5 bottom-0 right-0 ring-2',
    md: 'w-3 h-3 bottom-0.5 right-0.5 ring-2',
    lg: 'w-3.5 h-3.5 bottom-1 right-1 ring-2',
    xl: 'w-4 h-4 bottom-1.5 right-1.5 ring-2',
  };

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <div
        className={`${sizeClasses[size]} relative rounded-full overflow-hidden bg-[#F3F4F6] dark:bg-[#1A202C] border-2 border-[#E5E7EB] dark:border-[#2D3748] flex items-center justify-center transition-all duration-300 shadow-sm`}
      >
        {!imageError && (
          <img
            src="/profile.jpg"
            alt="Ankit Mewada"
            className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}

        {/* Minimalist Editorial Monogram Fallback when photo is pending upload */}
        {(!imageLoaded || imageError) && (
          <div
            className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAFAFA] to-[#EEF2F6] dark:from-[#161B26] dark:to-[#0F141F] text-[#171717] dark:text-[#E2E8F0] font-medium tracking-wider"
            title="Place photo as public/profile.jpg to display"
          >
            <span className="font-semibold text-blue-600 dark:text-blue-400">AM</span>
          </div>
        )}
      </div>

      {showAvailability && (
        <span
          className={`absolute ${indicatorSizes[size]} bg-emerald-500 rounded-full ring-white dark:ring-[#0A0D14]`}
          title="Active & Open to Opportunities"
        />
      )}
    </div>
  );
};
