/**
 * Given a record of classnames and booleans, return a string containing all classes marked as true.
 * @param classDefs record of strings, booleans
 * @returns 
 */
export const generateClassNames = (
  classDefs: Record<string, boolean | undefined | null>
): string => {
  return Object.entries(classDefs)
    .map(([className, doShow]) => (doShow ? className : null))
    .filter((element) => element !== null)
    .join(" ");
};
