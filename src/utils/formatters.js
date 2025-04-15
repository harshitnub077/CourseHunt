// Utility helper functions

export const formatCurrency = (val, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(val);
};

export const truncateText = (text, maxLength = 80) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
