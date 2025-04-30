// Utility helper functions

export const formatCurrency = (val, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(val);
};

export const truncateText = (text, maxLength = 80) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const formatCourseDuration = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h} hr ${m} min` : `${m} min`;
};

export const calculateDiscountPercentage = (original, current) => {
  if (!original || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
};

/**
 * Formats numeric rating to 1 decimal place
 */
export const formatRating = (rating) => (typeof rating === 'number' ? rating.toFixed(1) : '0.0');

// Clean up utility exports and comments
