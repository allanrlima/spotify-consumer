import favoriteTracksStore from ".";

global.scrollTo = jest.fn();

describe("FavoriteTracksStore", () => {
  it("Should save favorites track", () => {
    favoriteTracksStore.saveFavoriteTrack(1);
    expect(favoriteTracksStore.favoriteTracks).toEqual([1]);
  });
  it("Should not save more than 5 favorites track", () => {
    favoriteTracksStore.favoriteTracks = [];
    expect(favoriteTracksStore.favoriteTracks).toEqual([]);
    const tracks = [1, 2, 3, 4, 5, 6];
    tracks.map(track => favoriteTracksStore.saveFavoriteTrack(track));
    expect(favoriteTracksStore.favoriteTracks).toEqual([5, 4, 3, 2, 1]);
  });
  it("Should scroll to top if user try to put more than 5 favorite trals", () => {
    favoriteTracksStore.favoriteTracks = [];
    expect(favoriteTracksStore.favoriteTracks).toEqual([]);
    const tracks = [1, 2, 3, 4, 5, 6];
    tracks.map(track => favoriteTracksStore.saveFavoriteTrack(track));
    expect(global.scrollTo).toBeCalled();
  });
  it("Should delete favorites track", () => {
    favoriteTracksStore.favoriteTracks = [1];
    favoriteTracksStore.deleteFavoriteTrack(1);
    expect(favoriteTracksStore.favoriteTracks).toEqual([]);
  });
});
