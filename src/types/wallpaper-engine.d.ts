declare interface WallpaperPropertyListener {
	applyUserProperties: (properties: any) => void;
}

declare interface Window {
	wallpaperPropertyListener?: WallpaperPropertyListener;
}
