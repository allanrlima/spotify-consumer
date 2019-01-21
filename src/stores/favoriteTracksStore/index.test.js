import favoriteTracksStore from ".";

describe("FavoriteTracksStore", () => {
  it("Should save favorites track", () => {
    favoriteTracksStore.saveFavoriteTrack(1);
    expect(favoriteTracksStore.favoriteTracks).toEqual([1]);
  });
  it("Should delete favorites track", () => {
    favoriteTracksStore.deleteFavoriteTrack(1);
    expect(favoriteTracksStore.favoriteTracks).toEqual([]);
  });
});
