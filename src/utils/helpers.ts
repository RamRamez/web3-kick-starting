export const isSSRMode = () => {
	return typeof window === 'undefined';
};
