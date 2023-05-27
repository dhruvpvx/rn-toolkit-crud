import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const useThunk = (thunk) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchThunk = useCallback(
    (payload) => {
      setLoading(true);
      setError(null);
      return dispatch(thunk(payload))
        .unwrap()
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [dispatch, thunk]
  );

  const status = {
    loading,
    error,
  };

  return [fetchThunk, status];
};

export default useThunk;
