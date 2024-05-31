export const validateProduct = (
  title: string,
  description: string,
  originalPrice: number | null,
  price: number | null
): [string[], boolean] => {
  const errors: string[] = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!description || description.trim().length === 0) {
    errors.push("Description is required.");
  }

  if (originalPrice === null || originalPrice <= 0) {
    errors.push("Original price must be a positive number.");
  }

  if (price === null || price <= 0) {
    errors.push("Price must be a positive number.");
  }

  return [errors, errors.length === 0];
};
