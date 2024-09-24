import { useDispatch } from 'react-redux';
import { resetMyDay } from '@/redux/features/todoSlice.js';

const useResetMyDay = () => {
  const dispatch = useDispatch();
  const resetMyDayAtMidnight = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const millisecondsUntilMidnight = midnight.getTime() - now.getTime();

    setTimeout(() => {
      dispatch(resetMyDay());
      setInterval(
        () => {
          dispatch(resetMyDay());
        },
        24 * 60 * 60 * 1000,
      );
    }, millisecondsUntilMidnight);
  };
  return { resetMyDayAtMidnight };
};

export default useResetMyDay;
