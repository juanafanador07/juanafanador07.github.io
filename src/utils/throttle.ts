export default function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
) {
  let timerFlag: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (timerFlag === null) {
      func(...args);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
}
