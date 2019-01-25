export const hasTokens = _ => sessionStorage.getItem('token');

export const setSession = session => {
    sessionStorage.setItem('token', session)
};

export const signOut = _ => sessionStorage.clear();
