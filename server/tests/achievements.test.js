const { updateUserTitle } = require("../services/achievementService");
const Title = require("../models/Title");

jest.mock("../models/Title");

describe("Achievement Service - updateUserTitle", () => {
  let mockUser;
  let mockTitles;

  beforeEach(() => {
    mockUser = {
      username: "testuser",
      points: 0,
      title: null,
      save: jest.fn().mockResolvedValue(true),
    };

    mockTitles = [
      { _id: "t1", name: "Pemula", min: 0 },
      { _id: "t2", name: "Prajurit", min: 100 },
      { _id: "t3", name: "Ksatria", min: 500 },
    ];

    Title.find.mockReturnValue({
      sort: jest.fn().mockResolvedValue(mockTitles),
    });
  });

  it("should assign the lowest title for 0 points", async () => {
    mockUser.points = 0;
    const result = await updateUserTitle(mockUser);
    expect(result).toBe(true);
    expect(mockUser.title.toString()).toBe("t1");
  });

  it("should update title when points reach next threshold", async () => {
    mockUser.points = 150;
    mockUser.title = "t1";
    const result = await updateUserTitle(mockUser);
    expect(result).toBe(true);
    expect(mockUser.title.toString()).toBe("t2");
  });

  it("should stay at the same title if threshold not reached", async () => {
    mockUser.points = 150;
    mockUser.title = "t2";
    const result = await updateUserTitle(mockUser);
    expect(result).toBe(false);
    expect(mockUser.title.toString()).toBe("t2");
  });

  it("should handle high points correctly", async () => {
    mockUser.points = 1000;
    const result = await updateUserTitle(mockUser);
    expect(mockUser.title.toString()).toBe("t3");
  });
});
