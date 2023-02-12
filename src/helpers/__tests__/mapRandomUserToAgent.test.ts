import mapRandomUserToAgent from "../mapRandomUserToAgent";

describe("mapRandomUserToAgent", () => {
  it("should return a mapped object of type Agent", () => {
    const mockUser = {
      name: {
        first: "John",
        last: "Doe",
      },
      login: {
        username: "johndoe123",
      },
      location: {
        city: "New York",
        state: "NY",
        country: "USA",
        timezone: {
          offset: "-04:00",
          description: "Eastern Time (US & Canada)",
        },
        coordinates: {
          latitude: "40.7128",
          longitude: "74.0060",
        },
        street: {
          number: "123",
          name: "Main St",
        },
      },
      gender: "male",
      dob: {
        date: "1992-03-08T15:13:16.688Z",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    };
    const result = mapRandomUserToAgent(mockUser);

    expect(result).toEqual({
      firstName: "John",
      lastName: "Doe",
      codename: "johndoe123",
      city: "New York",
      state: "NY",
      country: "USA",
      gender: "male",
      dob: "1992-03-08T15:13:16.688Z",
      timezone: {
        offset: "-04:00",
        description: "Eastern Time (US & Canada)",
      },
      eyeColor: expect.any(String),
      largePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
      coordinates: {
        latitude: "40.7128",
        longitude: "74.0060",
      },
      address: "123 Main St",
    });
  });
});
