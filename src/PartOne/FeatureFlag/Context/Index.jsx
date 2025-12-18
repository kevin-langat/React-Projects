import { createContext, useEffect, useState } from 'react';
import featureFlagDataServiceCall from '../data';

export const FeatureFlagGlobal = createContext(null);

function FeatureFlagContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const res = await featureFlagDataServiceCall();
      setLoading(false);
      setEnabledFlags(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagGlobal.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagGlobal.Provider>
  );
}

export default FeatureFlagContext;
