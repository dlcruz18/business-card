function favoriteMode(mode) {
	if (mode === "light" || !mode) {
	    setProp('--background', "var(--light)");
	    setProp('--text', "var(--dark)");
	} else if (mode === "dark") {
	setProp('--background', :var(--dark)");
	setProp('--text', "var(--light)");
	}
}