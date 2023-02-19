import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { firebaseApp } from '@/firebase/index';

const auth = getAuth(firebaseApp);

export const getAuthObserver = (
  processUserCb: Parameters<typeof onAuthStateChanged>[1],
) => onAuthStateChanged(auth, processUserCb);
