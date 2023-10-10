import { useState, useLayoutEffect } from "react";

const queries = [
  "(max-width: 767px)",
  "(min-width: 768px) and (max-width: 1023px)",
  "(min-width: 1024px)",
];

const useMatchMedia = () => {
  const mediaQueryList = queries.map((query) => matchMedia(query));

  const getValues = () => mediaQueryList.map((mql) => mql.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryList.forEach((q) => q.addEventListener("change", handler));

    return () =>
      mediaQueryList.forEach((q) => q.removeEventListener("change", handler));
  });

  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};

export default useMatchMedia;
