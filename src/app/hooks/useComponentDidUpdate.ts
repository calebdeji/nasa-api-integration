import * as React from "react";

const useComponentDidUpdate = (callback: Function, dep: React.DependencyList) => {
	const hasMount = React.useRef(false);
	React.useEffect(() => {
		if (hasMount.current) {
			callback();
		} else {
			hasMount.current = true;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dep);
};

export default useComponentDidUpdate;
